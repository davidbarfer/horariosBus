interface Schedule {
  type: string;
  days: string;
  frequencies: string[];
}

export const name = 'M-175';
// Example usage with your data:
export const directo: Schedule = {
  type: 'Directo',
  days: 'LV',
  frequencies: [
    '07:00',
    '07:40',
    '08:00',
    '09:00',
    '09:20',
    '10:00',
    '10:20',
    '11:40',
    '13:00',
    '13:20',
    '14:00',
    '14:40',
    '15:00',
    '16:15',
    '17:45',
    '19:15',
    '20:45',
    '22:15'
  ],
};

export const estCercLV: Schedule = {
  type: 'Estación Cercanias',
  days: 'LV',
  frequencies: [
    '07:30',
    '08:20',
    '09:40',
    '10:40',
    '11:40',
    '11:20',
    '12:00',
    '12:20',
    '12:40',
    '13:40',
    '14:20',
    '15:20',
    '15:45',
    '16:45',
    '17:15',
    '18:15',
    '18:45',
    '19:45',
    '20:15',
    '21:15',
    '21:45',
    '22:45',
    '23:15',
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