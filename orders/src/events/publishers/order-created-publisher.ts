import { Publisher, OrderCreatedEvent, Subjects } from "@asifkarim47/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
