export interface PontoDeAmostragem {
    "@id": string;
    area: {
        "@id": string;
        label: string;
    };
    comment: string;
    easting: number;
    label: string;
    lat: number;
    long: number;
    northing: number;
    notation: string;
    samplingPointStatus: {
        "@id": string;
        label: string;
    };
    samplingPointType: {
        "@id": string;
        group: string;
        label: string;
    };
    subArea: {
        "@id": string;
        label: string;
    };
}

