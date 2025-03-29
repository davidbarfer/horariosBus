import { directo, estCercLV, estCercS, estCercDF, ginesS, ginesDF, sennorioGuzmanS, sennorioGuzmanDF, sennorioGuzmanGinesS, sennorioGuzmanGinesDF } from './m175AlbSev.ts';

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

export const M175_ALB_SEV = {
  name: 'M-175',
  frequencies: allFrequencies,
} 