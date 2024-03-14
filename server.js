const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "pug");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

let events = [
  {
    id: 1,
    title: "Community Clean-Up",
    description: "Join us for a community clean-up event at the local park.",
    date: "2024-04-22",
  },
  {
    id: 2,
    title: "Coding Workshop",
    description: "A workshop for beginners to learn coding.",
    date: "2024-05-15",
  },
];

app.get("/", (req, res) => {
  res.render("index", { events: events });
});

app.get("/add-event", (req, res) => {
  res.render("add-event");
});

app.post("/events", (req, res) => {
  const newEvent = {
    id: events.length + 1,
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
  };

  events.push(newEvent);

  res.redirect("/");
});

app.post("/delete-event/:id", (req, res) => {
  const { id } = req.params;

  events = events.filter((event) => event.id.toString() !== id);

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Event app listening at http://localhost:${port}`);
});
