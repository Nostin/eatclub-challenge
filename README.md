# EatClub Frontend Tech Challenge - Sean Thompson

A small React application built for the EatClub frontend technical challenge.

The app fetches restaurant data on load, displays a restaurant list sorted by best deal first, supports partial search by restaurant name and cuisine, and allows users to navigate to a restaurant detail screen where deals are sorted by highest discount.

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- TanStack Query
- Tailwind CSS
- Lucide React
- Biome

## Live Version

I've deployed my app to vercel to make it easy: https://eatclub-challenge-five.vercel.app/

## Screenshots
<img width="601" height="727" alt="Screenshot 2026-03-05 at 5 45 50 PM" src="https://github.com/user-attachments/assets/20bb0e21-4f18-4dc6-afb3-b8649f54efca" />
<img width="1126" height="722" alt="Screenshot 2026-03-05 at 5 45 33 PM" src="https://github.com/user-attachments/assets/4c269dd7-1872-4396-9f19-d2936578d6b4" />

## Running the Project

### 1. Clone the repository

```bash
git clone git@github.com:Nostin/eatclub-challenge.git
cd eatclub-challenge
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run dev server

```bash
npm run dev
```

The app will then be available at the local URL shown in the terminal, usually: http://localhost:5173

## Notes
The provided challenge JSON endpoint triggered browser CORS restrictions in local/client-side evaluation, so I mirrored the supplied JSON into a local static file for reliable fetch-on-load behavior during development and review.

I used Biome with a small set of sensible formatting/linting preferences, including preferring no semicolons where possible.

Some images in the supplied JSON do not load correctly, so I implemented a fallback image to keep the UI stable and avoid broken image states.

I intentionally kept the solution light and avoided heavier tooling such as a component library (for example shadcn/ui or MUI) or a framework such as Next.js / Remix.

I used the EatClub favicon for a small touch of branding consistency.

The supplied reference did not include a back button on the detail page, so I implemented one.

The company logo links back to /restaurants.

Due to time constraints, I did not implement automated testing (unit or end-to-end).

Due to time constraints, I did not implement user geolocation for the “0.5km away” label shown in the mockup.

“Take away / order online” data did not appear to be present in the supplied dataset, so this was omitted.

There was no “New” badge data in the restaurant detail payload, so that was omitted.

Only one image per restaurant was available in the supplied data, so I did not implement the image carousel shown in the detail screen reference.

I did implement responsive tile/grid behaviour for the restaurant list and deals layout as a bonus beyond the core requirements.
