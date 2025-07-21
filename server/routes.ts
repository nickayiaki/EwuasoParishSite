import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertContactSchema, 
  insertScholarshipApplicationSchema,
  insertReliefApplicationSchema
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      res.json({ success: true, contact });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        error: error instanceof Error ? error.message : "Invalid contact data" 
      });
    }
  });

  // Get all contacts
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ 
        error: "Failed to retrieve contacts" 
      });
    }
  });

  // Scholarship application submission
  app.post("/api/scholarship-applications", async (req, res) => {
    try {
      const applicationData = insertScholarshipApplicationSchema.parse(req.body);
      const application = await storage.createScholarshipApplication(applicationData);
      res.json({ success: true, application });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        error: error instanceof Error ? error.message : "Invalid application data" 
      });
    }
  });

  // Get all scholarship applications
  app.get("/api/scholarship-applications", async (req, res) => {
    try {
      const applications = await storage.getScholarshipApplications();
      res.json(applications);
    } catch (error) {
      res.status(500).json({ 
        error: "Failed to retrieve scholarship applications" 
      });
    }
  });

  // Relief application submission
  app.post("/api/relief-applications", async (req, res) => {
    try {
      const applicationData = insertReliefApplicationSchema.parse(req.body);
      const application = await storage.createReliefApplication(applicationData);
      res.json({ success: true, application });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        error: error instanceof Error ? error.message : "Invalid application data" 
      });
    }
  });

  // Get all relief applications
  app.get("/api/relief-applications", async (req, res) => {
    try {
      const applications = await storage.getReliefApplications();
      res.json(applications);
    } catch (error) {
      res.status(500).json({ 
        error: "Failed to retrieve relief applications" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
