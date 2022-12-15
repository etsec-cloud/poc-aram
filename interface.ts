interface Mails {
  idMail: string;
  provider: string;
  createdAt: string;
  weight: number;
  userId: string;
}

interface Users {
  idCognito: string;
  tokenProvider: string;
  settings: object;
  stats: {
    weightTotal: number; // co2 of mail box since the created ,
    lastScannedAt: Date;
    schedule: [
      {
        weightTotalSuppressed: number; // weight mail suppressed
        weightTotalNow: number; // weight mail now
        weightTotalSinceLastScanned: number; // weight total since last scanned
        scannedAt: Date;
      }
    ];
  };
}

interface Newsletters {
  userId: string;
  provider: string;
  unsubscribeUrl: string;
  unsubscribeMailto: string;
  senders: {
    email: string;
    name: string;
  };
}

interface Libelle {
  id: string;
  label: string;
  provider: string;
  senders: string;
  userId: string;
}
