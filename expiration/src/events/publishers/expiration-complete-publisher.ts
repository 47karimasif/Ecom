import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@asifkarim47/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
