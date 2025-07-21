# Ewuaso Parish Website - Project Documentation

## Overview

This is a modern Catholic parish website built for Ewuaso Parish, featuring three branch churches (Suswa, Saikerri, and Enkorika). The application serves as a comprehensive platform for community engagement, service programs, and administration of various parish initiatives including rescue centers, educational programs, and relief services.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and build processes
- **Styling**: Tailwind CSS with shadcn/ui component library
- **UI Framework**: Radix UI primitives for accessible components
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ESM modules
- **API Pattern**: RESTful API design
- **Request Handling**: Express middleware for logging, JSON parsing, and error handling
- **Development**: Hot reload with Vite integration in development mode

### Data Storage Architecture
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon Database serverless connection
- **Schema Management**: Shared schema definitions between client and server
- **Validation**: Zod schemas for runtime type validation
- **Current Implementation**: In-memory storage (MemStorage) for development, designed to be replaced with database storage

## Key Components

### Database Schema
The application defines four main entities:
- **Users**: Basic user authentication system
- **Contacts**: Contact form submissions from website visitors
- **Scholarship Applications**: Student scholarship applications with academic and financial details
- **Relief Applications**: Family relief assistance applications

### API Endpoints
- `POST /api/contact` - Submit contact form
- `GET /api/contacts` - Retrieve all contact submissions
- `POST /api/scholarship-applications` - Submit scholarship application
- `POST /api/relief-applications` - Submit relief assistance application

### UI Sections
- Hero section with call-to-action buttons
- Pastor introduction and leadership information
- Branch churches with mass times and locations
- Ministry overview (Rescue Center, Kindergarten, Food Relief, Disability Support)
- Program details with features and application processes
- Community projects (farming and livestock initiatives)
- Service programs (scholarships and relief distribution)
- Disability support services
- Events calendar
- Contact form with validation

## Data Flow

1. **Client Requests**: React components use TanStack React Query for server communication
2. **API Layer**: Express.js routes handle incoming requests with validation
3. **Data Validation**: Zod schemas validate request payloads
4. **Storage Layer**: Currently uses in-memory storage, designed for easy database integration
5. **Response Handling**: Standardized JSON responses with success/error states
6. **Client Updates**: React Query manages cache invalidation and UI updates

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless driver
- **drizzle-orm**: Type-safe ORM with PostgreSQL dialect
- **@tanstack/react-query**: Server state management
- **express**: Web framework for Node.js
- **zod**: TypeScript-first schema validation

### UI Dependencies
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **class-variance-authority**: Dynamic class name generation
- **clsx & tailwind-merge**: Class name utilities

### Development Dependencies
- **tsx**: TypeScript execution for Node.js
- **vite**: Build tool and development server
- **@replit/***: Replit-specific development plugins

## Deployment Strategy

### Build Process
1. **Client Build**: Vite compiles React application to static assets
2. **Server Build**: esbuild bundles server code for Node.js production
3. **Output**: Client assets in `dist/public`, server bundle in `dist/index.js`

### Environment Configuration
- **Development**: Uses tsx for TypeScript execution with hot reload
- **Production**: Runs compiled JavaScript with NODE_ENV=production
- **Database**: Requires DATABASE_URL environment variable for PostgreSQL connection

### Development vs Production
- Development includes Vite middleware integration for HMR
- Production serves static files from dist directory
- Environment-specific plugin loading (Replit cartographer for development)

### Database Migration
- Drizzle Kit configured for PostgreSQL migrations
- Schema located in `shared/schema.ts`
- Migrations output to `./migrations` directory
- Push command available for schema synchronization

The architecture is designed for easy scalability, with clear separation between client and server concerns, type-safe data handling throughout the stack, and a modular component structure that supports the parish's diverse community service programs.