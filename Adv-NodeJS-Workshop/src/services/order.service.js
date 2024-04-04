import { Order } from "../models/order.model.js";
import { Product } from "../models/product.model.js";
export class OrderService {
  static async getAllOrders() {
    const orders = await Order.find({});

    return orders;
  }
  static async getOrderById(orderId) {
    const foundOrder = await Order.findById(orderId).populate({
      path: "products",
      model: Product,
      select: "title stock description category price rating",
    });

    if (!foundOrder) throw new Error("Order Not Found");

    return foundOrder;
  }
  static async createOrder(orderData) {
    const newOrder = new Order(orderData);

    const order = await newOrder.save();

    return order;
  }
  static async updateOrder(orderId, orderUpdateData) {
    const foundOrder = await Order.findById(orderId);

    Object.assign(foundOrder, orderUpdateData);

    const updatedOrder = await foundOrder.save();

    return updatedOrder;
  }
  static async deleteOrder(orderId) {
    const response = await Order.findByIdAndDelete(orderId);

    if (!response) throw new Error("Order Not Found");
  }
}
