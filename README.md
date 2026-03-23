# Maison Askim - Pâtisseries Tunisiennes 🧁

A vitrine website for a Tunisian sweets business. Customers can browse products and book a rendez-vous.

## Tech Stack

- **HTML / CSS / JavaScript** — No frameworks, pure vanilla
- **Bootstrap 5** — Responsive layout, components, icons
- **Supabase** — Database for products and rendez-vous bookings

## Project Structure

```
maisonaskim/
├── index.html            ← Welcome page (hero, popular products, promotions)
├── products.html         ← Products listing with filters
├── rendezvous.html       ← Booking form + social media links
├── css/
│   └── style.css         ← All custom styles
├── js/
│   ├── supabase.js       ← Supabase connection setup
│   ├── main.js           ← Welcome page logic
│   ├── products.js       ← Products page logic (load, filter, display)
│   └── rendezvous.js     ← Booking form logic (validate, submit)
├── assets/
│   ├── images/           ← Product photos, hero background, logo
│   └── icons/            ← Any custom icons
└── README.md
```

## Getting Started

### 1. Set Up Supabase

1. Create a free account at [supabase.com](https://supabase.com)
2. Create a new project
3. Go to the **SQL Editor** and run the table creation queries found in `js/supabase.js`
4. Go to **Settings → API** and copy your project URL and anon key
5. Paste them into `js/supabase.js`

### 2. Add Images

Put your images in the `assets/images/` folder:
- `hero-bg.jpg` — Background for the welcome page
- `logo.png` — Your business logo
- Product photos

### 3. Open in Browser

Just open `index.html` in your browser! No build tools needed.

For a better experience, use the **Live Server** extension in VS Code.

## How to Work Through This Project

Every file contains `TODO` comments that guide you through what to build. Start with:

1. **The navbar** in `index.html` — copy it to the other pages once done
2. **The footer** — same approach, build once, copy everywhere
3. **The hero section** — practice CSS backgrounds and flexbox
4. **The product cards** — learn Bootstrap cards and grid
5. **The booking form** — learn Bootstrap forms
6. **Supabase connection** — connect everything to a real database
7. **Custom styling** — make it beautiful in `style.css`

## Useful Links

- [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.3/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Supabase JS Docs](https://supabase.com/docs/reference/javascript/)
- [CSS Tricks - Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Tricks - Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
