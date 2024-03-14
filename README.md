# Event Planner

Event Planner is a web application designed to help users create, manage, and keep track of various events. With an intuitive user interface, users can easily add new events, view details about each event, and delete events they no longer need.

## Features

- **Add New Event:** Allows users to add events with a title and description.
- **View Event Details:** Users can click on an event to view more detailed information.
- **Delete Events:** Events can be easily deleted with a single click.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- Node.js
- NPM

### Installing

A step by step series of examples that tell you how to get a development environment running:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/event-planner.git
   ```

2. Navigate to the project directory:

   ```bash
   cd event-planner
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm server.js
   ```

The application should now be running on [http://localhost:3000](http://localhost:3000).

## Built With

- **HTML** - The markup language used
- **CSS** - The styling technique applied
- **Node.js** - The runtime environment
- **Express** - The web application framework

# Project Structure

event-planner/
│
├── node_modules/ # Contains all npm dependencies
│
├── public/ # Publicly accessible files
│ └── styles/ # CSS files for styling
│ └── style.css # Main stylesheet
│
│
├── views/ # Template files for rendering responses
│ ├── add-event.pug # Error response template
│ ├── index.pug # Main page template
│ └── details.pug # Base layout template
│
├── server.js # Main application file
├── package.json # Defines npm behaviors and packages for the project
├── README.md # Project overview and setup instructions
