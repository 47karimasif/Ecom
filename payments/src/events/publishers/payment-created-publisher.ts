import { Subjects, Publisher, PaymentCreatedEvent } from "@asifkarim47/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
