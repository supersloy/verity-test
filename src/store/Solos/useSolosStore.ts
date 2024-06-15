import { create } from 'zustand';
import { Position, Shape2D } from '../types';

type Shape2DInfo = {
  shape: Shape2D;
  origin: Position;
  selected: boolean;
};

type SolosStore = {
  stack: {
    Left: Shape2DInfo[];
    Center: Shape2DInfo[];
    Right: Shape2DInfo[];
  };
  selectedGuardian: {
    Left?: Position;
    Center?: Position;
    Right?: Position;
  };
};

const useSolosStore = create<SolosStore>(() => ({
  stack: { Left: [], Center: [], Right: [] },
  selectedGuardian: {},
}));

export { useSolosStore };
export type { Shape2DInfo };
