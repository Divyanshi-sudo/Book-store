const app = {
  name: "Society Finance Management System",
  type: "Full-stack financial management web application",
  target: "Indian cooperative/society management",
  currency: "INR",

  goal: "Create a production-quality society finance management application with complete financial workflows, secure authentication, role-based access, real database integration, accurate calculations, reports, notifications, and a premium responsive interface.",

  roles: {
    admin: {
      permissions: [
        "View dashboard",
        "Manage members",
        "Manage shares",
        "Manage contributions",
        "Manage payments",
        "Manage loans",
        "Approve/reject loans",
        "Manage loan repayments",
        "Manage income",
        "Manage expenses",
        "Manage returns/dividends",
        "View and export reports",
        "Manage notifications",
        "View audit logs",
        "Manage society settings"
      ]
    },
    member: {
      permissions: [
        "View own dashboard",
        "View own profile",
        "View own shares",
        "View own contributions",
        "View own payments",
        "View own loans",
        "View own repayment schedules",
        "View own ledger",
        "View own returns",
        "Download own receipts",
        "View notifications",
        "Update permitted profile information",
        "Apply for loans if enabled"
      ]
    }
  },

  authentication: {
    pages: [
      "Login",
      "Register/invitation",
      "Forgot password",
      "Reset password",
      "Change password"
    ],
    requirements: [
      "Secure password hashing",
      "Session management",
      "Logout",
      "Protected routes",
      "Role-based access control",
      "Backend authorization",
      "No plaintext passwords",
      "No exposed secret keys"
    ]
  },

  database: {
    preferred: "PostgreSQL / Supabase",
    tables: [
      "users",
      "roles",
      "members",
      "shares",
      "share_transactions",
      "contributions",
      "payments",
      "loan_applications",
      "loans",
      "loan_installments",
      "transactions",
      "ledger_entries",
      "income",
      "expenses",
      "returns",
      "notifications",
      "documents",
      "audit_logs",
      "society_settings"
    ],
    requirements: [
      "Primary keys",
      "Foreign keys",
      "Indexes",
      "Constraints",
      "Timestamps",
      "Proper relationships",
      "Data validation",
      "Row Level Security"
    ]
  },

  navigation: {
    admin: [
      "Dashboard",
      "Members",
      "Shares",
      "Contributions",
      "Payments",
      "Loans",
      "Transactions / Ledger",
      "Income & Expenses",
      "Returns / Dividends",
      "Reports",
      "Notifications",
      "Audit Logs",
      "Settings",
      "Profile",
      "Logout"
    ],
    member: [
      "Dashboard",
      "Profile",
      "Shares",
      "Contributions",
      "Payments",
      "Loans",
      "Transactions",
      "Returns",
      "Notifications",
      "Logout"
    ]
  },

  dashboard: {
    admin: {
      kpis: [
        "Total Members",
        "Active Members",
        "Total Share Capital",
        "Total Contributions",
        "Total Loans Disbursed",
        "Total Outstanding Loans",
        "Total Amount Repaid",
        "Pending Loan Applications",
        "Total Society Income",
        "Total Society Expenses",
        "Current Year Profit",
        "Amount Available for Returns"
      ],
      charts: [
        "Monthly Contributions",
        "Loans Issued",
        "Loan Repayments",
        "Income vs Expenses",
        "Loan Status Distribution",
        "Member Growth"
      ]
    },
    member: {
      cards: [
        "Total Shares",
        "Total Contributions",
        "Current Loan",
        "Outstanding Loan",
        "Next Installment",
        "Total Returns"
      ],
      sections: [
        "Recent Transactions",
        "Upcoming Payments",
        "Notifications",
        "Financial Summary"
      ]
    }
  },

  members: {
    list: [
      "Member ID",
      "Name",
      "Phone",
      "Email",
      "Join Date",
      "Status",
      "Share Count",
      "Total Contributions",
      "Outstanding Loan",
      "Current Balance"
    ],
    actions: [
      "Add Member",
      "View",
      "Edit",
      "Activate",
      "Deactivate",
      "Search",
      "Filter",
      "Sort",
      "Export"
    ],
    profile: {
      personalInformation: [
        "Member ID",
        "Full Name",
        "Date of Birth",
        "Gender",
        "Phone",
        "Email",
        "Address",
        "Nominee Details",
        "Joining Date",
        "Membership Status"
      ],
      financialSummary: [
        "Total Shares",
        "Share Value",
        "Total Contributions",
        "Total Repayments",
        "Total Loans",
        "Outstanding Loan",
        "Interest Paid",
        "Returns Received",
        "Current Balance"
      ],
      tabs: [
        "Overview",
        "Shares",
        "Contributions",
        "Loans",
        "Payments",
        "Ledger",
        "Returns",
        "Documents"
      ]
    }
  },

  shares: {
    fields: [
      "Share Number",
      "Member",
      "Purchase Date",
      "Share Value",
      "Quantity",
      "Status"
    ],
    actions: [
      "Issue Shares",
      "Transfer Shares",
      "Cancel Shares",
      "View Ownership",
      "Generate Share Certificate",
      "View Share History"
    ],
    calculation: "Total Share Capital = Total Shares × Configured Share Value"
  },

  contributions: {
    fields: [
      "Member",
      "Contribution Month",
      "Amount Due",
      "Amount Paid",
      "Payment Date",
      "Payment Method",
      "Receipt Number",
      "Status"
    ],
    statuses: [
      "Paid",
      "Partially Paid",
      "Pending",
      "Overdue"
    ],
    features: [
      "Record payment",
      "Edit payment",
      "Search",
      "Filter by month",
      "Filter by member",
      "Filter by status",
      "Generate receipt",
      "Export"
    ],
    calculations: [
      "Monthly total",
      "Member total",
      "Pending contributions",
      "Overdue contributions",
      "Collection percentage"
    ]
  },

  payments: {
    fields: [
      "Payment ID",
      "Member",
      "Transaction Type",
      "Amount",
      "Date",
      "Payment Method",
      "Reference Number",
      "Notes",
      "Recorded By",
      "Status"
    ],
    methods: [
      "Cash",
      "Bank Transfer",
      "UPI",
      "Cheque",
      "Other"
    ]
  },

  loans: {
    application: {
      fields: [
        "Requested Amount",
        "Purpose",
        "Tenure",
        "Repayment Frequency",
        "Supporting Documents"
      ]
    },
    statuses: [
      "Draft",
      "Submitted",
      "Under Review",
      "Approved",
      "Rejected",
      "Disbursed",
      "Active",
      "Completed",
      "Defaulted",
      "Cancelled"
    ],
    approval: [
      "Review member financial history",
      "Review existing loans",
      "Review outstanding balance",
      "Approve",
      "Reject",
      "Add approval notes",
      "Set approved amount",
      "Set interest rate",
      "Set tenure",
      "Set repayment frequency"
    ]
  },

  loanCalculations: {
    support: [
      "Simple Interest",
      "Reducing Balance EMI"
    ],
    simpleInterest: "Interest = Principal × Rate × Time",
    reducingBalance: [
      "Principal",
      "Interest Rate",
      "Tenure",
      "EMI",
      "Principal Component",
      "Interest Component",
      "Remaining Principal",
      "Total Interest",
      "Total Repayment"
    ],
    rules: [
      "Never hardcode EMI values",
      "Generate repayment schedules dynamically",
      "Use decimal-safe monetary calculations",
      "Use configured interest rates",
      "Support configurable repayment frequency"
    ]
  },

  loanRepaymentSchedule: {
    columns: [
      "Installment Number",
      "Due Date",
      "Principal Due",
      "Interest Due",
      "Total Installment",
      "Amount Paid",
      "Remaining Amount",
      "Status"
    ],
    statuses: [
      "Upcoming",
      "Due",
      "Paid",
      "Partially Paid",
      "Overdue"
    ]
  },

  loanRepayment: {
    workflow: [
      "Validate payment",
      "Update installment",
      "Apply principal and interest correctly",
      "Update loan balance",
      "Create ledger transaction",
      "Generate receipt",
      "Create audit event",
      "Notify member"
    ]
  },

  ledger: {
    transactionTypes: [
      "Share Purchase",
      "Contribution",
      "Loan Disbursement",
      "Loan Repayment",
      "Interest Received",
      "Return / Dividend",
      "Expense",
      "Income",
      "Adjustment"
    ],
    fields: [
      "Transaction ID",
      "Date",
      "Member",
      "Transaction Type",
      "Debit",
      "Credit",
      "Balance",
      "Reference",
      "Description",
      "Created By"
    ],
    memberLedger: [
      "Date",
      "Description",
      "Debit",
      "Credit",
      "Balance"
    ]
  },

  incomeExpenses: {
    incomeCategories: [
      "Interest Income",
      "Fees",
      "Penalties",
      "Other Income"
    ],
    expenseCategories: [
      "Office Expenses",
      "Salaries",
      "Maintenance",
      "Utilities",
      "Other Expenses"
    ],
    fields: [
      "Category",
      "Amount",
      "Date",
      "Description",
      "Payment Method",
      "Reference",
      "Attachment",
      "Created By"
    ],
    calculation: "Profit = Total Income - Total Expenses"
  },

  returns: {
    workflow: [
      "Select Financial Year",
      "Enter or confirm distributable profit",
      "Configure return percentage",
      "Preview calculation",
      "Review member-wise allocation",
      "Approve distribution",
      "Finalize distribution"
    ],
    columns: [
      "Member",
      "Eligible Amount",
      "Return Percentage",
      "Return Amount",
      "Status",
      "Credit Date"
    ],
    rules: [
      "Finalized returns cannot be accidentally modified",
      "All return transactions must be recorded in the ledger"
    ]
  },

  reports: {
    types: [
      "Member Report",
      "Active Member Report",
      "Contribution Report",
      "Pending Contribution Report",
      "Overdue Contribution Report",
      "Active Loan Report",
      "Completed Loan Report",
      "Pending Loan Application Report",
      "Outstanding Loan Report",
      "Overdue Loan Report",
      "Financial Report",
      "Income Report",
      "Expense Report",
      "Profit Report",
      "Returns Report",
      "Transaction Report"
    ],
    features: [
      "Date filters",
      "Member filters",
      "Status filters",
      "Search",
      "Export CSV",
      "Print",
      "PDF generation"
    ]
  },

  notifications: {
    triggers: [
      "Contribution Due",
      "Contribution Overdue",
      "Payment Received",
      "Loan Application Submitted",
      "Loan Approved",
      "Loan Rejected",
      "Loan Disbursed",
      "Installment Due",
      "Installment Overdue",
      "Payment Recorded",
      "Return Credited"
    ],
    features: [
      "Notification center",
      "Read/unread state",
      "Timestamp",
      "Email/SMS/WhatsApp integration-ready architecture"
    ]
  },

  receipts: {
    types: [
      "Contribution Receipt",
      "Loan Repayment Receipt",
      "Share Purchase Receipt",
      "Other Payment Receipt"
    ],
    fields: [
      "Society Name",
      "Society Logo",
      "Receipt Number",
      "Date",
      "Member Name",
      "Member ID",
      "Transaction Type",
      "Amount",
      "Payment Method",
      "Reference",
      "Authorized By"
    ],
    currencyFormat: "₹1,25,000.00"
  },

  documents: {
    attachTo: [
      "Members",
      "Loan Applications",
      "Loans",
      "Transactions"
    ],
    examples: [
      "Identity Documents",
      "Address Proof",
      "Loan Documents",
      "Supporting Documents"
    ],
    requirements: [
      "Secure storage",
      "Authorized access only"
    ]
  },

  auditLogs: {
    events: [
      "Login",
      "Logout",
      "Member Created",
      "Member Edited",
      "Share Issued",
      "Payment Recorded",
      "Payment Edited",
      "Loan Submitted",
      "Loan Approved",
      "Loan Rejected",
      "Loan Disbursed",
      "Repayment Recorded",
      "Return Finalized",
      "Settings Changed"
    ],
    fields: [
      "User",
      "Action",
      "Entity",
      "Entity ID",
      "Timestamp",
      "Metadata"
    ]
  },

  settings: {
    society: [
      "Society Name",
      "Logo",
      "Address",
      "Phone",
      "Email",
      "Registration Details",
      "Financial Year",
      "Currency",
      "Date Format"
    ],
    financial: [
      "Share Value",
      "Contribution Amount",
      "Loan Interest Rate",
      "Loan Limits",
      "Default Tenure",
      "Penalty Rules",
      "Return / Dividend Settings"
    ]
  },

  ui: {
    style: [
      "Premium",
      "Modern",
      "Professional",
      "Fintech-inspired",
      "Clean",
      "Minimal",
      "Trustworthy",
      "Highly readable"
    ],
    colors: {
      primary: "Deep Blue / Navy",
      background: "White / Light Neutral",
      positive: "Green",
      negative: "Red",
      warning: "Amber"
    },
    designRules: [
      "Excellent spacing",
      "Rounded cards",
      "Subtle shadows",
      "Professional typography",
      "Clear financial hierarchy",
      "Elegant charts",
      "Consistent status badges",
      "Avoid excessive gradients",
      "Avoid excessive glassmorphism",
      "Avoid excessive animations",
      "Prioritize readability"
    ]
  },

  responsive: {
    devices: [
      "Desktop",
      "Laptop",
      "Tablet",
      "Mobile"
    ],
    requirements: [
      "Responsive sidebar",
      "Stack dashboard cards",
      "Single-column mobile forms",
      "Responsive tables",
      "Touch-friendly controls",
      "Readable charts"
    ]
  },

  ux: {
    states: [
      "Loading",
      "Success",
      "Error",
      "Empty",
      "Confirmation"
    ],
    requirements: [
      "Skeleton loaders",
      "Button loading states",
      "Toast notifications",
      "Confirmation dialogs",
      "Human-readable validation",
      "Retry options",
      "Professional empty states"
    ]
  },

  components: [
    "Button",
    "Input",
    "Select",
    "DatePicker",
    "Modal",
    "ConfirmationDialog",
    "DataTable",
    "Pagination",
    "SearchBar",
    "FilterPanel",
    "StatusBadge",
    "KPICard",
    "ChartCard",
    "EmptyState",
    "LoadingSkeleton",
    "Toast",
    "Receipt",
    "FinancialSummary",
    "TransactionTable"
  ],

  security: [
    "Secure authentication",
    "Backend authorization",
    "Role-based access control",
    "Database-level access control",
    "Row Level Security",
    "Input validation",
    "Secure password handling",
    "Protected API routes",
    "Environment variables",
    "No exposed secrets",
    "Secure document access",
    "Session expiration",
    "Audit logging"
  ],

  financialRules: [
    "Never use fake financial calculations",
    "Never hardcode financial balances",
    "Never hardcode EMI",
    "Never hardcode interest",
    "Never silently change financial balances",
    "Every financial change must create a transaction",
    "Use decimal-safe monetary calculations",
    "Display all money in INR",
    "Use Indian number formatting",
    "Maintain complete transaction history"
  ],

  demoData: {
    members: 20,
    contributions: "Several months of realistic records",
    shares: "Multiple ownership records",
    loans: "Multiple loans with different statuses",
    repayments: "Realistic repayment schedules",
    income: "Sample society income",
    expenses: "Sample society expenses",
    returns: "Sample return records",
    notifications: "Sample notifications"
  },

  routes: {
    admin: [
      "/admin/dashboard",
      "/admin/members",
      "/admin/members/:id",
      "/admin/shares",
      "/admin/contributions",
      "/admin/payments",
      "/admin/loans",
      "/admin/loans/:id",
      "/admin/transactions",
      "/admin/income-expenses",
      "/admin/returns",
      "/admin/reports",
      "/admin/notifications",
      "/admin/audit-logs",
      "/admin/settings"
    ],
    member: [
      "/member/dashboard",
      "/member/profile",
      "/member/shares",
      "/member/contributions",
      "/member/payments",
      "/member/loans",
      "/member/transactions",
      "/member/returns",
      "/member/notifications"
    ]
  },

  technology: {
    frontend: [
      "React",
      "TypeScript",
      "Tailwind CSS"
    ],
    backend: [
      "Supabase",
      "PostgreSQL",
      "Authentication",
      "Storage",
      "Row Level Security"
    ],
    icons: "Lucide",
    charts: "Reliable React charting library"
  },

  architecture: {
    principle: "Design the database and financial transaction architecture before implementing the UI. All screens must connect to the real data model.",
    phases: [
      "Foundation",
      "Authentication",
      "Database",
      "Roles and permissions",
      "Members",
      "Shares",
      "Contributions",
      "Payments",
      "Ledger",
      "Loans",
      "Loan calculations",
      "Repayments",
      "Income and expenses",
      "Returns",
      "Reports",
      "Notifications",
      "Audit logs",
      "Settings",
      "Responsive UI",
      "Testing",
      "Final polish"
    ]
  },

  forbidden: [
    "Fake buttons",
    "Dead links",
    "Placeholder core functionality",
    "Hardcoded financial balances",
    "Hardcoded loan calculations",
    "Giant React components",
    "Exposed credentials",
    "Plaintext passwords",
    "Client-side-only authorization",
    "Member access to other members' data",
    "Silent financial modifications",
    "Excessive animations",
    "Generic template-only dashboard"
  ],

  testing: {
    adminWorkflow: [
      "Login",
      "Create member",
      "Issue shares",
      "Create contribution",
      "Record payment",
      "Generate receipt",
      "View member ledger",
      "Review loan application",
      "Approve loan",
      "Disburse loan",
      "Generate repayment schedule",
      "Record repayment",
      "Verify outstanding balance",
      "Add income",
      "Add expense",
      "Calculate profit",
      "Calculate returns",
      "Finalize returns",
      "Generate report",
      "Review audit log"
    ],
    memberWorkflow: [
      "Login",
      "View dashboard",
      "View shares",
      "View contributions",
      "View payments",
      "View loans",
      "View repayment schedule",
      "View ledger",
      "View returns",
      "Download receipt",
      "View notifications"
    ],
    edgeCases: [
      "Invalid input",
      "Duplicate member",
      "Duplicate payment",
      "Unauthorized access",
      "Member accessing admin route",
      "Member accessing another member's record",
      "Loan overpayment",
      "Partial repayment",
      "Overdue installment",
      "Empty database",
      "API failure",
      "Session expiration",
      "Mobile layout"
    ]
  },

  finalRequirement: "Build a complete working financial cooperative management platform. It must be secure, responsive, production-quality, financially accurate, database-driven, and usable by both society administrators and members. Do not stop at the frontend. Implement the actual workflows, database operations, calculations, authentication, authorization, reports, receipts, notifications, and audit logging."
};