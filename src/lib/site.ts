export const SITE = {
  name: "CuboSites",
  tagline: "Built in control",
  domain: "www.cubosites.com",
  url: "https://www.cubosites.com",
  appUrl: "https://app.cubosites.com",
  adminUrl: "https://admin.cubosites.com",
  apiUrl: "https://api.cubosites.com",
  email: "hello@cubixmet.com",
  phone: "8921592742",
  phoneDisplay: "+91 89215 92742",
  phoneHref: "tel:+918921592742",
  description:
    "CuboSites is mobile-first bookkeeping for construction contractors — expenses, client payments, staff, photos, reminders, wallet billing and Drive backups across every site.",
} as const;

export const NAV = [
  { href: "#product", label: "Product" },
  { href: "#apps", label: "Apps" },
  { href: "#insights", label: "Insights" },
  { href: "#contact", label: "Contact" },
] as const;

export const FEATURES = [
  {
    title: "Multi-site ledger",
    body: "Track materials, labour, equipment and other costs per site with integer-paise accuracy.",
  },
  {
    title: "Client payments",
    body: "Record receipts against sites and see net cash flow without confusing it for profit.",
  },
  {
    title: "Staff & permissions",
    body: "Owners, site managers and staff with fine-grained rights for entries, media and reports.",
  },
  {
    title: "Progress photos & bills",
    body: "Attach site photos and bill images so every entry has proof when you need it.",
  },
  {
    title: "Notes & reminders",
    body: "Workspace notes plus timed reminders with PWA notifications — no Firebase required.",
  },
  {
    title: "Reports & exports",
    body: "Filter by site, date and type, then export CSV or PDF for owners and accountants.",
  },
] as const;

export const APPS = [
  {
    id: "contractor",
    name: "Contractor app",
    eyebrow: "Web + PWA",
    summary:
      "The day-to-day workspace for contractors on site and in the office — installable as a PWA.",
    points: [
      "Dashboard — active sites, expense totals, client payments and net cash flow at a glance",
      "Sites — create and manage sites with active / completed / inactive status history",
      "Entries — materials, labour, equipment and other costs with integer-paise amounts",
      "Payments — record client receipts against sites without mixing them into “profit”",
      "Staff — invite crew, assign sites and control who can edit entries, media or reports",
      "Photos — progress shots and bill images attached to sites or ledger lines",
      "Notes & reminders — workspace notes plus timed alerts via the installable PWA",
      "Reports — filter by site, date and type; export CSV or PDF for owners and accountants",
      "Activity — audit trail of who changed what across the workspace",
      "Subscription & wallet — plan status, renewals and prepaid wallet balance",
      "Settings — profile, Google Drive backup and notification preferences",
    ],
    href: SITE.appUrl,
  },
  {
    id: "admin",
    name: "Super Admin",
    eyebrow: "Platform ops",
    summary:
      "Cross-tenant control for CuboSites operators — contractors never see this surface.",
    points: [
      "Overview — contractors, revenue signals, renewals and health of the platform",
      "Contractors — search tenants; drill into sites, staff, invoices, wallet and plan",
      "Sites & staff — cross-tenant views of construction sites and assigned people",
      "Subscriptions — plan versions, renewals and overdue workspaces",
      "Wallets — free or paid recharge with income tracking in paise",
      "Payments — review manual / offline payment submissions before credit",
      "Tax & pricing — configure tax rules and pricing versions for billing",
      "Storage — billed storage snapshots per contractor workspace",
      "Backups — monitor Drive backup jobs and inspect failed runs",
      "Support — case inbox with threaded replies for contractor issues",
      "Notifications, activity & settings — platform alerts, audit log and admin config",
    ],
    href: SITE.adminUrl,
  },
  {
    id: "api",
    name: "API & auth",
    eyebrow: "Shared backend",
    summary: "One Django REST API powers both apps with JWT sessions and strict tenant isolation.",
    points: [
      "Auth — email/password, Google Sign-In, OTP signup and password reset flows",
      "Sessions — long-lived refresh tokens with rotation so crews stay signed in",
      "Tenancy — every query is workspace-scoped; no cross-tenant data leakage",
      "Ledger API — sites, entries, payments, staff, media, notes and reminders",
      "Billing — wallet ledger, subscriptions and storage charges stored in paise",
      "Backups — scheduled monthly plus on-demand Google Drive workspace exports",
      "Admin API — staff-only endpoints for wallets, support, tax and platform ops",
    ],
    href: "#apps",
  },
] as const;

export const INSIGHT_SERIES = [
  { month: "Apr", expenses: 42, payments: 55 },
  { month: "May", expenses: 51, payments: 48 },
  { month: "Jun", expenses: 38, payments: 62 },
  { month: "Jul", expenses: 57, payments: 70 },
  { month: "Aug", expenses: 49, payments: 66 },
  { month: "Sep", expenses: 61, payments: 78 },
  { month: "Oct", expenses: 54, payments: 81 },
] as const;

export const SITE_MIX = [
  { name: "Active", value: 62, fill: "var(--chart-1)" },
  { name: "Completed", value: 24, fill: "var(--chart-2)" },
  { name: "Inactive", value: 14, fill: "var(--chart-3)" },
] as const;
