import { Publisher, Subjects, TicketCreatedEvent } from "@asifkarim47/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
