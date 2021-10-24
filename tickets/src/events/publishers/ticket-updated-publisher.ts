import { Publisher, Subjects, TicketUpdatedEvent } from "@asifkarim47/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
