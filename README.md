

# 📍 Location Marker

A simple web application that displays the locations of **two entities** — **User** and **Company** — on an interactive map, each with its own marker.

The project uses **TypeScript**, **faker.js** for generating mock data, and a mapping library to visually represent locations.

Live Demo: [View Project](https://swayamsivam37.github.io/location-marker/)

---

## 🚀 Features

* Displays **User** and **Company** location markers on a map
* Uses **faker.js** to generate random but realistic location coordinates
* Distinguishes markers with **custom labels/icons**
* Responsive and works across devices
* Deployable on **GitHub Pages**

---

## 🛠️ Tech Stack

* **TypeScript** — Strongly typed JavaScript for better code quality
* **Faker.js** — Random name & coordinate generation
* **Mapping Library** (Google Maps / Leaflet / etc., depending on your setup)
* **Parcel** — For bundling and building
* **GitHub Pages** — For deployment

---

## 📂 Project Structure

```
location-marker/
│── src/
│   ├── index.ts       # Entry point
│   ├── User.ts        # User class with location & marker
│   ├── Company.ts     # Company class with location & marker
│── dist/              # Build output (ignored in git)
│── package.json
│── tsconfig.json
│── .gitignore
│── README.md
```

---

## ⚙️ Installation & Setup

1️⃣ Clone the repository

```bash
git clone https://github.com/<your-username>/location-marker.git
cd location-marker
```

2️⃣ Install dependencies

```bash
npm install
```

3️⃣ Run the project locally

```bash
npm start
```

4️⃣ Build for production

```bash
npm run build
```

5️⃣ Deploy to GitHub Pages

```bash
npm run deploy
```

---

## 📜 License

This project is licensed under the **MIT License** — feel free to modify and use it.

---
