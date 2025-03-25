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
    '08:15',
    '08:45',
    '09:15',
    '09:45',
    '11:00',
    '12:00',
    '13:45',
    '14:15',
    '16:00',
    '17:00',
    '19:00',
    '20:00',
    '22:00',
  ]
}

export const estCercDF: Schedule = {
  type: 'Estación Cercanias',
  days: 'DF',
  frequencies: [
    '09:00',
    '10:00',
    '12:00',
    '13:00',
    '14:00',
    '16:00',
    '17:00',
    '19:00',
    '21:00',
    '22:00',
  ],
}

export const sennorioGuzmanS: Schedule = {
  type: 'Señorio Guzman',
  days: 'S',
  frequencies: [
    '07:45',
    '10:15',
    '13:15',
    '15:00',
    '21:00',
    '23:00',
  ],
};

export const sennorioGuzmanDF: Schedule = {
  type: 'Señorio Guzman',
  days: 'DF',
  frequencies: [
    '01:00',
    '08:00',
    '11:00',
    '15:00',
    '21:00',
    '23:00',
  ],
};

export const sennorioGuzmanGinesS: Schedule = {
  type: 'Señorio Guzman',
  days: 'S',
  frequencies: [
    '01:00',
    '03:00',
    '18:00',
  ],
};

export const sennorioGuzmanGinesDF: Schedule = {
  type: 'Señorio Guzman',
  days: 'DF',
  frequencies: [
    '03:00',
    '18:00',
  ],
};