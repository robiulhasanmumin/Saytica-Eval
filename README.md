# Saytica Eval Console 📊

A sleek, modern, and production-ready Web Application built for AI training data management and model evaluation tracking. This project satisfies the requirements for the **Software Developer Intern Take-Home Task (Stage 2)**.

---

## 🚀 Technical Stack

- **Frontend:** Next.js 14 (App Router), Tailwind CSS (Fully Responsive & Glassmorphic UI), React Hooks.
- **Data Architecture:** Client-side state orchestration coupled with reactive local JSON seed data (`src/data/`).
- **State Management:** React Local State management handling real-time mutations and status sorting algorithms.

---

## 💡 Key Technical Decisions & Trade-offs

### 1. Embedded JSON Architecture & Optimistic State Updates
Instead of building an over-engineered database layer for a static-schema task evaluation setup, I integrated the structured `models.json` and `tasks.json` directly into the client application layer.
- **Why:** This architectural decision shifts the computational weight of searching, multi-column sorting, and task status transitions entirely to the client side. This eliminates latency, removes API fetching overhead.

### 2. Handling Data Inconsistency & Edge Cases (The "Clean Data" Challenge)
The provided data source was realistically incomplete, which I addressed through robust defensive coding:
- **Missing Accuracy Scores:** Rendered gracefully as `N/A` with custom CSS typography to keep table structures aligned instead of outputting buggy `0%` metrics.
- **Missing Cost Records:** Explicitly captured and checked to bypass active multiplier calculations safely.
- **Inconsistent Capitalization:** Standardized raw statuses (`pending`, `in_progress`, `done`) across states to support predictable visual indicators and dual-role filters.

---

## 🛠️ Linux Installation & Local Setup

Follow these straightforward steps to set up and run the environment locally on your Linux machine:

### Prerequisites
Make sure you have `Node.js` (v18.x or higher) and `npm` installed.
```bash
node -v
git clone https://github.com/robiulhasanmumin/Saytica-Eval.git
cd Saytica-Eval
npm install
npm run dev