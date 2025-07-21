import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const scholarshipApplications = pgTable("scholarship_applications", {
  id: serial("id").primaryKey(),
  studentName: text("student_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  academicLevel: text("academic_level").notNull(),
  financialNeed: text("financial_need").notNull(),
  academicRecord: text("academic_record").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const reliefApplications = pgTable("relief_applications", {
  id: serial("id").primaryKey(),
  familyName: text("family_name").notNull(),
  contactPerson: text("contact_person").notNull(),
  phone: text("phone").notNull(),
  address: text("address").notNull(),
  familySize: integer("family_size").notNull(),
  needDescription: text("need_description").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true,
});

export const insertScholarshipApplicationSchema = createInsertSchema(scholarshipApplications).omit({
  id: true,
  createdAt: true,
});

export const insertReliefApplicationSchema = createInsertSchema(reliefApplications).omit({
  id: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Contact = typeof contacts.$inferSelect;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type ScholarshipApplication = typeof scholarshipApplications.$inferSelect;
export type InsertScholarshipApplication = z.infer<typeof insertScholarshipApplicationSchema>;
export type ReliefApplication = typeof reliefApplications.$inferSelect;
export type InsertReliefApplication = z.infer<typeof insertReliefApplicationSchema>;
