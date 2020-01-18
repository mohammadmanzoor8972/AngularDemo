export interface TarifModel {
  rank: string;
  provider: any;
  contractTerm: any;
  signup: any;
  campaign: any;
  cost: any;
  remarks: any;
  additionalOptions: any;
  requiresAvailabilityCheck: string;
}

export interface TarifRepsonse {
  totalResults: number;
  offers: TarifModel[];
}
