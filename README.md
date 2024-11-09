# Eventure - Your Ultimate Event Management & Sharing Platform

**Eventure** is a community-driven platform designed to bridge event organizers and attendees, making it easier than ever to share, discover, and participate in a wide range of events. Whether the event is free or ticketed, Eventure offers a seamless experience for users to browse, sign up, and join events of interest. For organizers, Eventure provides powerful tools to manage event details and effortlessly track registrations.

**Explore Eventure Live:** [Eventure - Try It Out!](https://eventure-xi.vercel.app/)

### Getting Started with Eventure
Sign up is quick and secure through **Clerk**. Want to explore different perspectives? You can test the application using these demo credentials:

#### Organizer View
- **Username:** `testorganizer`
- **Password:** `12345%test`

#### User View
- **Username:** `testuser`
- **Password:** `12345%test`

Dive into Eventure and experience a streamlined way to connect communities with memorable events!

## Tech Stack

- **Node.js**
- **Next.js**
- **TypeScript**
- **TailwindCSS**
- **Stripe** - for payment processing
- **Zod** - schema validation
- **React Hook Form** - form handling
- **Shadcn** - component library
- **Uploadthing** - media upload functionality

## Features

- **User Authentication with Clerk (CRUD):**  
  Users can register quickly and securely using their email or by linking their Google accounts. Additional social media login options are easily configurable with Clerk.

- **Event Management (CRUD):**  
  Full control over event management with the ability to create, view, edit, and remove events.

- **Related Events Suggestions:**  
  When viewing an event, users can see a list of similar events based on category, enhancing discovery and engagement.

- **User-Created Events Display:**  
  Events created by a user are organized in their profile, making it easy to manage.

- **Real-Time Search & Filter:**  
  A responsive search and filter feature that updates results with each keystroke, enabling users to quickly and effortlessly find events matching their preferences.

- **Flexible Category Management:**  
  Easily add and manage event categories, keeping the platform adaptable to diverse event types.

- **Secure Payments via Stripe:**  
  Integrated Stripe payment processing offers users a smooth, secure checkout experience for paid events.

- **Order Management for Events:**  
  Provides a detailed view of all event-related transactions, helping organizers and users track their orders efficiently.

- **Order Search Functionality:**  
  Quickly locate and manage specific orders with a streamlined search tool, simplifying order tracking.

- **Google Calendar Integration:**  
  Users can effortlessly add events to their Google Calendar, helping them stay organized and track event attendance.

## Getting Started

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/justanotherchili/eventure.git
cd ./eventure
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
#NEXT
NEXT_PUBLIC_SERVER_URL=

#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_CLERK_WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

#MONGODB
MONGODB_URI=

#UPLOADTHING
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

#STRIPE
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

Replace the placeholder values with your actual credentials 

**Running the Project**

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
