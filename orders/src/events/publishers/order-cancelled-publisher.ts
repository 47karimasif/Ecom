import { Subjects, Publisher, OrderCancelledEvent } from "@asifkarim47/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
