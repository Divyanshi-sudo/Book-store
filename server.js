const path = require('path');
const express = require('express');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const db = require('./src/database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: process.env.SESSION_SECRET || 'paper-ember-development-secret',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 4, httpOnly: true, sameSite: 'lax' }
}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/books', (req, res) => {
  const { search = '', genre = 'All', sort = 'featured' } = req.query;
  const books = db.listBooks({ search, genre, sort });
  res.json({ books, genres: db.listGenres() });
});

app.get('/api/books/:id', (req, res) => {
  const book = db.getBook(Number(req.params.id));
  if (!book) return res.status(404).json({ error: 'Book not found.' });
  res.json({ book });
});

app.post('/api/books', (req, res) => {
  if (!req.session.user) return res.status(401).json({ error: 'Sign in before adding a book.' });
  const { title, author, genre, price, rating, description, cover, stock } = req.body;
  const numericPrice = Number(price);
  const numericRating = Number(rating || 0);
  const numericStock = Number(stock || 0);
  if (!String(title || '').trim() || !String(author || '').trim() || !String(genre || '').trim() || !Number.isFinite(numericPrice) || numericPrice < 0 || numericRating < 0 || numericRating > 5 || !Number.isInteger(numericStock) || numericStock < 0 || !String(description || '').trim()) {
    return res.status(400).json({ error: 'Enter a title, author, genre, valid price, stock quantity, rating from 0 to 5, and description.' });
  }
  const book = db.createBook({ title: title.trim(), author: author.trim(), genre: genre.trim(), price: numericPrice, rating: numericRating, stock: numericStock, description: description.trim(), cover: String(cover || 'new-book').trim() || 'new-book' });
  res.status(201).json({ book });
});

app.delete('/api/books/:id', (req, res) => {
  if (!req.session.user) return res.status(401).json({ error: 'Sign in before deleting a book.' });
  const deleted = db.deleteBook(Number(req.params.id));
  if (!deleted) return res.status(404).json({ error: 'Book not found.' });
  res.json({ ok: true });
});

app.get('/api/session', (req, res) => {
  res.json({ user: req.session.user || null });
});

app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;
  const normalizedEmail = String(email || '').trim().toLowerCase();
  if (!String(name || '').trim() || !/^\S+@\S+\.\S+$/.test(normalizedEmail) || String(password || '').length < 6) {
    return res.status(400).json({ error: 'Enter a name, a valid email, and a password of at least 6 characters.' });
  }
  if (db.findUserByEmail(normalizedEmail)) return res.status(409).json({ error: 'An account with that email already exists.' });
  const user = db.createUser(String(name).trim(), normalizedEmail, bcrypt.hashSync(password, 10));
  req.session.user = user;
  res.status(201).json({ user });
});

app.post('/api/login', (req, res) => {
  const normalizedEmail = String(req.body.email || '').trim().toLowerCase();
  const user = db.findUserByEmail(normalizedEmail);
  if (!user || !bcrypt.compareSync(String(req.body.password || ''), user.password_hash)) {
    return res.status(401).json({ error: 'Email or password is incorrect.' });
  }
  const safeUser = { id: user.id, name: user.name, email: user.email };
  req.session.user = safeUser;
  res.json({ user: safeUser });
});

app.post('/api/logout', (req, res) => req.session.destroy(() => res.json({ ok: true })));

app.listen(PORT, () => console.log(`Paper & Ember is running at http://localhost:${PORT}`));
