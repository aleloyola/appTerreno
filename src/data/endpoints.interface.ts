export interface Endpoint {
  tokenAuth: string,
  tokenRefresh: string,
  tokenVerify: string,
  transportSearch: string,
  tripByTransport: string,
  tripsInProgress: string,
  tripsFinished: string,
  tripsFinishedByDate: string,
  tripStatusToDriverInTransit: string,
  tripStatusWaiting: string,
  tripStatusInProgress : string,
  tripStatusToFinished : string
}
