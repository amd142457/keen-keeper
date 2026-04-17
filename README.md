# 📊 Friendship Tracker Dashboard

A modern web application to track interactions (Call, Text, Video) with people and visualize them using a timeline and analytics dashboard.

---

## 🚀 Features

- 📌 Add interactions (Call, Text, Video)
- 🕒 Timeline view of all activities
- 📊 Pie chart analytics (Recharts)
- 🔍 Filter interactions by type
- 📱 Responsive design (Mobile + Desktop)
- 🔔 Toast notifications

---

## 🛠️ Technologies Used

- Next.js (App Router)
- React Context API
- Tailwind CSS
- Recharts (for charts)
- React Toastify

---

## 📁 Folder Structure

```
src/
 ├── app/
 │    ├── timeline/
 │    ├── status/
 │    └── [id]/
 │
 ├── components/
 │    ├── TimelineButtons.jsx
 │    ├── InteractionChart.jsx
 │
 ├── context/
 │    └── TimelineContext.js
 │
 ├── data/
 │    └── data.json
```

---

## ⚙️ Installation

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
npm run dev
```

---

## 📊 How It Works

1. User clicks on Call/Text/Video button
2. Data is stored in Context API
3. Timeline page shows all interactions
4. Status page visualizes data using Pie Chart
5. Filter allows viewing specific interaction types

---

## 🧠 Learning Highlights

- Context API for global state management
- Dynamic routing in Next.js
- Data filtering and transformation
- Chart visualization using Recharts

---

## 📌 Future Improvements

- 💾 Save data in localStorage / database
- 📅 Date-wise filtering
- 📈 More analytics (weekly/monthly)
- 🌙 Dark mode support

---

## 🙌 Author

**Your Name**

md akram

## ⭐ Give a Star

If you like this project, please give it a ⭐ on GitHub!
