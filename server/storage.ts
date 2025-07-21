import { 
  users, 
  contacts,
  scholarshipApplications,
  reliefApplications,
  type User, 
  type InsertUser,
  type Contact,
  type InsertContact,
  type ScholarshipApplication,
  type InsertScholarshipApplication,
  type ReliefApplication,
  type InsertReliefApplication
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  createScholarshipApplication(application: InsertScholarshipApplication): Promise<ScholarshipApplication>;
  getScholarshipApplications(): Promise<ScholarshipApplication[]>;
  
  createReliefApplication(application: InsertReliefApplication): Promise<ReliefApplication>;
  getReliefApplications(): Promise<ReliefApplication[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private scholarshipApplications: Map<number, ScholarshipApplication>;
  private reliefApplications: Map<number, ReliefApplication>;
  
  private currentUserId: number;
  private currentContactId: number;
  private currentScholarshipId: number;
  private currentReliefId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.scholarshipApplications = new Map();
    this.reliefApplications = new Map();
    
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentScholarshipId = 1;
    this.currentReliefId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { 
      ...insertContact, 
      id,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort((a, b) => 
      (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  async createScholarshipApplication(insertApplication: InsertScholarshipApplication): Promise<ScholarshipApplication> {
    const id = this.currentScholarshipId++;
    const application: ScholarshipApplication = { 
      ...insertApplication, 
      id,
      createdAt: new Date()
    };
    this.scholarshipApplications.set(id, application);
    return application;
  }

  async getScholarshipApplications(): Promise<ScholarshipApplication[]> {
    return Array.from(this.scholarshipApplications.values()).sort((a, b) => 
      (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  async createReliefApplication(insertApplication: InsertReliefApplication): Promise<ReliefApplication> {
    const id = this.currentReliefId++;
    const application: ReliefApplication = { 
      ...insertApplication, 
      id,
      createdAt: new Date()
    };
    this.reliefApplications.set(id, application);
    return application;
  }

  async getReliefApplications(): Promise<ReliefApplication[]> {
    return Array.from(this.reliefApplications.values()).sort((a, b) => 
      (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [contact] = await db
      .insert(contacts)
      .values(insertContact)
      .returning();
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return await db
      .select()
      .from(contacts)
      .orderBy(contacts.createdAt);
  }

  async createScholarshipApplication(insertApplication: InsertScholarshipApplication): Promise<ScholarshipApplication> {
    const [application] = await db
      .insert(scholarshipApplications)
      .values(insertApplication)
      .returning();
    return application;
  }

  async getScholarshipApplications(): Promise<ScholarshipApplication[]> {
    return await db
      .select()
      .from(scholarshipApplications)
      .orderBy(scholarshipApplications.createdAt);
  }

  async createReliefApplication(insertApplication: InsertReliefApplication): Promise<ReliefApplication> {
    const [application] = await db
      .insert(reliefApplications)
      .values(insertApplication)
      .returning();
    return application;
  }

  async getReliefApplications(): Promise<ReliefApplication[]> {
    return await db
      .select()
      .from(reliefApplications)
      .orderBy(reliefApplications.createdAt);
  }
}

export const storage = new DatabaseStorage();
