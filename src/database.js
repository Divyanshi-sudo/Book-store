const path = require('path');
const Database = require('better-sqlite3');

const db = new Database(path.join(__dirname, '..', 'bookstore.db'));
db.pragma('journal_mode = WAL');
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE COLLATE NOCASE,
    password_hash TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
  CREATE TABLE IF NOT EXISTS books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    genre TEXT NOT NULL,
    price REAL NOT NULL CHECK(price >= 0),
    rating REAL NOT NULL DEFAULT 0,
    description TEXT NOT NULL,
    cover TEXT NOT NULL,
    featured INTEGER NOT NULL DEFAULT 0,
    stock INTEGER NOT NULL DEFAULT 10 CHECK(stock >= 0)
  );
`);
if (!db.prepare('PRAGMA table_info(books)').all().some(column => column.name === 'stock')) {
  db.exec('ALTER TABLE books ADD COLUMN stock INTEGER NOT NULL DEFAULT 10');
}

const count = db.prepare('SELECT COUNT(*) AS total FROM books').get().total;
if (!count) {
  const insert = db.prepare(`INSERT INTO books (title, author, genre, price, rating, description, cover, featured) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`);
  const books = [
    ['The Night Circus', 'Erin Morgenstern', 'Fiction', 1599, 4.7, 'A spellbinding arena of wonder where two young magicians duel through a mysterious midnight circus.', 'night-circus', 1],
    ['Sea of Tranquility', 'Emily St. John Mandel', 'Literary', 1299, 4.5, 'A quiet, dazzling time-travel story that folds centuries, artists, and a moon colony together.', 'sea-tranquility', 1],
    ['Tomorrow, and Tomorrow, and Tomorrow', 'Gabrielle Zevin', 'Fiction', 1499, 4.8, 'A deeply human novel about friendship, creativity, and the games we build to understand each other.', 'tomorrow', 1],
    ['Braiding Sweetgrass', 'Robin Wall Kimmerer', 'Nature', 1799, 4.9, 'Indigenous wisdom, scientific knowledge, and the reciprocal gifts of the natural world.', 'sweetgrass', 0],
    ['The Creative Act', 'Rick Rubin', 'Creativity', 2099, 4.6, 'A generous field guide to making art, paying attention, and trusting the creative process.', 'creative-act', 0],
    ['Piranesi', 'Susanna Clarke', 'Fantasy', 1199, 4.7, 'An exquisite dream of an endless house, tides, statues, and a mind searching for home.', 'piranesi', 0]
  ];
  const seed = db.transaction(() => books.forEach(book => insert.run(...book)));
  seed();
}

const catalogPrices = [
  ['The Night Circus', 'Erin Morgenstern', 1599],
  ['Sea of Tranquility', 'Emily St. John Mandel', 1299],
  ['Tomorrow, and Tomorrow, and Tomorrow', 'Gabrielle Zevin', 1499],
  ['Braiding Sweetgrass', 'Robin Wall Kimmerer', 1799],
  ['The Creative Act', 'Rick Rubin', 2099],
  ['Piranesi', 'Susanna Clarke', 1199]
];
const updateCatalogPrice = db.prepare('UPDATE books SET price = ? WHERE title = ? AND author = ?');
catalogPrices.forEach(([title, author, price]) => updateCatalogPrice.run(price, title, author));

function listBooks({ search, genre, sort }) {
  let query = 'SELECT * FROM books WHERE 1=1';
  const params = {};
  if (search) { query += ' AND (title LIKE @search OR author LIKE @search)'; params.search = `%${search}%`; }
  if (genre && genre !== 'All') { query += ' AND genre = @genre'; params.genre = genre; }
  query += sort === 'price-low' ? ' ORDER BY price ASC' : sort === 'price-high' ? ' ORDER BY price DESC' : sort === 'rating' ? ' ORDER BY rating DESC' : ' ORDER BY featured DESC, id ASC';
  return db.prepare(query).all(params);
}

module.exports = {
  listBooks,
  getBook: id => db.prepare('SELECT * FROM books WHERE id = ?').get(id),
  listGenres: () => db.prepare('SELECT DISTINCT genre FROM books ORDER BY genre').all().map(row => row.genre),
  createBook: book => {
    const result = db.prepare('INSERT INTO books (title, author, genre, price, rating, description, cover, stock) VALUES (@title, @author, @genre, @price, @rating, @description, @cover, @stock)').run(book);
    return db.prepare('SELECT * FROM books WHERE id = ?').get(result.lastInsertRowid);
  },
  deleteBook: id => db.prepare('DELETE FROM books WHERE id = ?').run(id).changes > 0,
  findUserByEmail: email => db.prepare('SELECT * FROM users WHERE email = ?').get(email),
  createUser: (name, email, passwordHash) => {
    const result = db.prepare('INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)').run(name, email, passwordHash);
    return { id: result.lastInsertRowid, name, email };
  }
};
