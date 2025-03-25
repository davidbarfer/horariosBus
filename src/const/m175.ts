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
    '6:35',
    '7:20',
    '7:40',
    '8:20',
    '8:40',
    '9:20',
    '10:20',
    '11:0',
    '11:20',
    '13:20',
    '14:0',
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
    '6:05',
    '7:00',
    '8:00',
    '9:00',
    '9:40',
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