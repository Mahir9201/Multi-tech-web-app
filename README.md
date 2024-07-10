# Multi-Tech Web Application

This project showcases a multi-tech web application using various technologies including .NET Core, Angular, PHP, HTML, CSS, JavaScript, and Python. Each technology is demonstrated with advanced functionalities to display comprehensive knowledge.

## Table of Contents

1. [Project Structure](#project-structure)
2. [How to Run Each Part](#how-to-run-each-part)
    - [Running the .NET Core Application](#running-the-net-core-application)
    - [Running the Angular Application](#running-the-angular-application)
    - [Running the PHP Application](#running-the-php-application)
    - [Running the Python Script](#running-the-python-script)
    - [Running the Static HTML, CSS, and JavaScript](#running-the-static-html-css-and-javascript)
3. [Features Demonstrated](#features-demonstrated)
    - [.NET Core](#net-core)
    - [Angular](#angular)
    - [PHP](#php)
    - [Python](#python)
    - [HTML, CSS, and JavaScript](#html-css-and-javascript)

## Project Structure

multi-tech-web-app
│
├── AngularApp
│ ├── src
│ │ ├── app
│ │ │ ├── task-form
│ │ │ │ ├── task-form.component.css
│ │ │ │ ├── task-form.component.html
│ │ │ │ ├── task-form.component.spec.ts
│ │ │ │ └── task-form.component.ts
│ │ │ ├── task-list
│ │ │ │ ├── task-list.component.css
│ │ │ │ ├── task-list.component.html
│ │ │ │ ├── task-list.component.spec.ts
│ │ │ │ └── task-list.component.ts
│ │ │ ├── app.component.css
│ │ │ ├── app.component.html
│ │ │ ├── app.component.spec.ts
│ │ │ ├── app.component.ts
│ │ │ ├── app.module.ts
│ │ │ ├── app.routes.ts
│ │ │ ├── app.config.ts
│ │ │ ├── task.service.ts
│ │ │ ├── task.ts
│ │ ├── assets
│ │ │ 
│ │ ├── index.html
│ │ ├── main.ts
│ │ ├── styles.css
│ ├── angular.json
│ ├── package.json
│ ├── README.md
│ └── tsconfig.json
│
├── DotNetCoreApp
│ ├── Controllers
│ │ ├── HomeController.cs
│ │ ├── TasksController.cs
│ ├── Models
│ │ ├── ErrorViewModel.cs
│ │ ├── Task.cs
│ ├── Views
│ │ ├── Home
│ │ │ └── Index.cshtml
│ ├── wwwroot
│ ├── appsettings.json
│ ├── DotNetCoreApp.csproj
│ └── Program.cs
│
├── PHPApp
│ ├── script.php
│ └── create_db.php
│
├── Python
│ ├── analysis.py
│ └── analysis_result.json
│
├── wwwroot
│ ├── index.html
│ ├── script.js
│ └── styles.css

## How to Run Each Part

### Running the .NET Core Application

1. Open the `DotNetCoreApp` folder in your terminal.
2. Run the application:
   dotnet run
3. Navigate to http://localhost:5000 to see the .NET Core application.


### Running the Angular Application
1. Open the AngularApp folder in your terminal.
2. Install the dependencies:
npm install

3. Serve the application:
ng serve

4. Navigate to http://localhost:4200 to see the Angular application.

### Running the PHP Application
1. Ensure you have a local server like WAMP or XAMPP installed.
2. Place the PHPApp folder in your server's root directory (e.g., www or htdocs).
3. Run create_db.php to set up the database.
4. Navigate to http://localhost/script.php to see the PHP script in action.

### Running the Python Script
1. Ensure you have Python and the required libraries installed on your system.
2. Open the Python folder in your terminal.
3. Install the required libraries:
pip install pandas matplotlib
4. Run the script:
python analysis.py

### Running the Static HTML, CSS, and JavaScript
1. Open wwwroot/index.html in your browser to see the static HTML, CSS, and JavaScript page.


## Features Demonstrated

### .NET Core
MVC Pattern: Demonstrates the Model-View-Controller pattern using .NET Core.
RESTful API: Implements RESTful API endpoints for managing tasks.
Data Models and Controllers: Utilizes data models and controllers for task management.

### Angular
Component-based Architecture: Utilizes Angular's component-based architecture for building the UI.
HTTP Client Usage: Demonstrates usage of Angular's HttpClient for making HTTP requests.
Data Binding and Services: Implements data binding and services for task management.

### PHP
Database Connectivity: Connects to a MySQL database and performs CRUD operations.
SQL Operations: Demonstrates SQL operations for inserting and fetching tasks.
HTML Generation: Dynamically generates HTML to display task data.

### Python
JSON Handling: Reads and processes JSON data.
Data Analysis with pandas: Uses pandas for data analysis.
Plotting with matplotlib: Creates plots using matplotlib to visualize data.

### HTML, CSS, and JavaScript
Simple Webpage Structure: Creates a basic webpage structure with HTML.
Styling with CSS: Uses CSS for styling the webpage.
JavaScript Interactions: Adds interactivity with JavaScript.
