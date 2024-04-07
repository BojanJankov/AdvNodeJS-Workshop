import { Client } from "../models/auth.model.js";
import bcrypt from "bcryptjs";

export class ClientService {
  static async getAllClients() {
    const clients = await Client.find({});

    return clients;
  }
  static async getClientById(clientId) {
    const foundClient = await Client.findById(clientId);

    if (!foundClient) throw new Error("Clinet Not Found");

    return foundClient;
  }
  static async registerClient(clientData) {
    const clients = await this.getAllClients();

    const emailExists = clients.find(
      (client) => client.email === clientData.email
    );

    if (emailExists) throw new Error("Email already exists");

    const { firstName, lastName, email, password } = clientData;

    const hashedPassword = await bcrypt.hash(password, 8);

    const newClient = new Client(firstName, lastName, email, hashedPassword);

    const createdClient = await newClient.save();

    delete createdClient.password;

    return createdClient;
  }
}
