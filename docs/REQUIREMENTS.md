# ToDo Application

## Business Requirements Document (BRD)

### Business Need

The business wants its staff to maintain a list of ToDo tasks so that management can monitor and track the work being performed by employees.

---

## Product Requirements Document (PRD)

The application should allow users to manage tasks by:

- Storing task titles
- Adding new tasks
- Updating existing tasks
- Deleting tasks

### Entity

#### Task

| Field | Type   | Description       |
| ----- | ------ | ----------------- |
| title | String | Title of the task |

---

# Project Milestones

## Milestone 1: ToDo App Frontend

### Project Setup

- Setup Git repository (DONE)
- Create React application using Vite(DONE)
- Configure React Router(DONE)
- Install and configure React Hook Form(DONE)
- Install and configure Yup validation (DONE)

### Features

#### Task Listing

- As a user, I should be able to view all tasks.(DONE)

#### Task Creation

- As a user, I should be able to add a new task.(DONE)
- As a user, I should immediately see the task after adding it.(DONE)

#### Task Update

- As a user, I should be able to edit an existing task.(DONE)

#### Task Deletion

- As a user, I should be able to delete an existing task.(DONE)

---

## Milestone 2: ToDo App Backend

### Project Setup

- Setup Express.js application(DONE)
- Configure Prisma ORM(DONE)
- Connect Prisma to the database(DONE)

### Database Schema

#### Task

| Field     | Type     | Description           |
| --------- | -------- | --------------------- |
| id        | Integer  | Primary Key           |
| title     | String   | Task title            |
| createdAt | DateTime | Creation timestamp    |
| updatedAt | DateTime | Last update timestamp |

### API Endpoints

#### Tasks API

| Method | Endpoint     | Description             |
| ------ | ------------ | ----------------------- |
| GET    | `/tasks`     | List all tasks (DONE)   |
| POST   | `/tasks`     | Create a new task       |
| PUT    | `/tasks/:id` | Update an existing task |
| DELETE | `/tasks/:id` | Delete a task           |

### Documentation

- Configure Swagger/OpenAPI documentation (DONE)
- Create Postman collection for API testing

---

## Milestone 3: Frontend and Backend Integration

### Features

#### Fetch Tasks

- As a user, I should be able to retrieve tasks from the backend.

#### Persist Updates

- As a user, when I update a task, the changes should persist in the database.

#### Persist Deletions

- As a user, when I delete a task, it should be permanently removed from the database.

#### Persist Creations

- As a user, I should be able to add a new task that is stored in the database.

---

## Milestone 4: Deployment

### CI/CD Pipeline

- Create a build and deployment pipeline
- Automate deployments to AWS

### Infrastructure

#### Frontend

- Host React application in Amazon S3

#### Backend

- Host Express API in Amazon EC2

### Optional Enhancements

- Configure CloudFront for frontend delivery
- Configure HTTPS using SSL certificates
- Configure monitoring and logging

---

## Milestone 5: End-to-End Testing

### Testing Scope

- Test task creation
- Test task listing
- Test task updates
- Test task deletion
- Verify frontend and backend integration

### Suggested Tools

- Playwright
- Cypress

---

# Technology Stack

## Frontend

- React
- Vite
- React Router
- React Hook Form
- Yup

## Backend

- Node.js
- Express.js
- Prisma ORM

## Database

- PostgreSQL

## DevOps

- AWS S3
- AWS EC2
- GitHub Actions
- Swagger/OpenAPI
- Postman

## Testing

- Playwright or Cypress

---

# Definition of Done

A feature is considered complete when:

- Code is committed to Git repository
- Code review is completed
- Unit tests pass
- E2E tests pass
- API documentation is updated
- Feature is deployed successfully
- Acceptance criteria are satisfied
