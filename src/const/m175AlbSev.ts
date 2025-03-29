interface Schedule {
  type: string;
  days: string;
  frequencies: string[];
}

export const name = 'M-175';
// Un objeto cuya clave es el día, y el valor es un array con los tipos que ruta disponibles
export const directo: Schedule = {
  type: 'Directo',
  days: 'LV',
  frequencies: [
    '06:35',
    '07:20',
    '07:40',
    '08:20',
    '08:40',
    '09:20',
    '10:20',
    '11:00',
    '11:20',
    '13:20',
    '14:00',
    '14:20',
    '16:20',
    '17:20',
    '18:20',
    '19:20',
    '20:20',
    '21:20'
  ],
};

export const estCercLV: Schedule = {
  type: 'Estación Cercanias',
  days: 'LV',
  frequencies: [
    '06:05',
    '07:00',
    '08:00',
    '09:00',
    '09:40',
    '10:00',
    '10:40',
    '11:40',
    '12:00',
    '12:20',
    '12:40',
    '13:00',
    '13:40',
    '14:50',
    '15:20',
    '15:50',
    '16:50',
    '17:50',
    '18:50',
    '19:50',
    '21:50',
    '22:50',
  ],
}

export const estCercS: Schedule = {
  type: 'Estación Cercanias',
  days: 'S',
  frequencies: [
    '07:50',
    '08:50',
    '09:50',
    '10:20',
    '12:20',
    '13:20',
    '14:20',
    '15:20',
    '17:20',
    '18:20',
    '20:20',
    '22:20',
  ]
}

export const estCercDF: Schedule = {
  type: 'Estación Cercanias',
  days: 'DF',
  frequencies: [
    '07:20',
    '09:20',
    '12:20',
    '14:20',
    '15:20',
    '17:20',
    '18:20',
    '19:20',
    '21:20',
  ],
}

export const ginesS: Schedule = {
  type: 'Gines (ida)',
  days: 'S',
  frequencies: [
    '11:20',
  ],
};

export const ginesDF: Schedule = {
  type: 'Gines (ida)',
  days: 'DF',
  frequencies: [
    '11:20',
  ],
};

export const sennorioGuzmanS: Schedule = {
  type: 'Señorio Guzman',
  days: 'S',
  frequencies: [
    '07:20',
    '08:20',
    '09:20',
    '12:50',
    '16:20',
    '21:20',
  ],
};

export const sennorioGuzmanDF: Schedule = {
  type: 'Señorio Guzman',
  days: 'DF',
  frequencies: [
    '08:20',
    '10:20',
    '13:20',
    '16:20',
    '20:20',
    '22:20',
  ],
};

export const sennorioGuzmanGinesS: Schedule = {
  type: 'Señorio Guzman',
  days: 'S',
  frequencies: [
    '00:20',
  ],
};

export const sennorioGuzmanGinesDF: Schedule = {
  type: 'Señorio Guzman',
  days: 'DF',
  frequencies: [
    '00:20',
  ],
};

let allFrequencies: string[] = [];

directo.frequencies.forEach(f => allFrequencies.push(f));
estCercLV.frequencies.forEach(f => allFrequencies.push(f));
estCercS.frequencies.forEach(f => allFrequencies.push(f));
estCercDF.frequencies.forEach(f => allFrequencies.push(f));
ginesS.frequencies.forEach(f => allFrequencies.push(f));
ginesDF.frequencies.forEach(f => allFrequencies.push(f));
sennorioGuzmanS.frequencies.forEach(f => allFrequencies.push(f));
sennorioGuzmanDF.frequencies.forEach(f => allFrequencies.push(f));
sennorioGuzmanGinesS.frequencies.forEach(f => allFrequencies.push(f));
sennorioGuzmanGinesDF.frequencies.forEach(f => allFrequencies.push(f)); 

allFrequencies.sort();

// Actually assign the filtered result back to allFrequencies
allFrequencies = allFrequencies.filter((value, index, self) => self.indexOf(value) === index);

export const M175_ALB_SEV = {
  name: 'M-175',
  frequencies: allFrequencies,
  LV: [ directo, estCercLV],
  S: [ estCercS, ginesS, sennorioGuzmanS, sennorioGuzmanGinesS],
  DF: [ estCercDF, ginesDF, sennorioGuzmanDF, sennorioGuzmanGinesDF],
  types: ['Directo', 'Estación Cercanias', 'Gines (ida)', 'Señorio Guzman'],
};