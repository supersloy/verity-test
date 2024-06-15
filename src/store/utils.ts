import { IconSquare, IconTriangle, IconCircle, IconProps, Icon } from '@tabler/icons-react';
import { Position, Shape, Shape2D, Shape3D } from './types';

const shapes2D = ['Circle', 'Square', 'Triangle'] as Shape2D[];
const shapes3D = ['Cone', 'Cube', 'Cylinder', 'Prism', 'Pyramid', 'Sphere'] as Shape3D[];
const positions = ['Left', 'Center', 'Right'] as Position[];

function is3D(shape: Shape): shape is Shape3D {
  return shapes3D.includes(shape as Shape3D);
}

function is2D(shape: Shape): shape is Shape2D {
  return shapes2D.includes(shape as Shape2D);
}

const ShapeBasesMapping = {
  Sphere: ['Circle', 'Circle'],
  Cube: ['Square', 'Square'],
  Pyramid: ['Triangle', 'Triangle'],
  Cylinder: ['Circle', 'Square'],
  Cone: ['Circle', 'Triangle'],
  Prism: ['Square', 'Triangle'],
} as Record<Shape3D, [Shape2D, Shape2D]>;

const ReverseShapeBasesMapping = {
  'Circle-Circle': 'Sphere',
  'Square-Square': 'Cube',
  'Triangle-Triangle': 'Pyramid',
  'Circle-Square': 'Cylinder',
  'Circle-Triangle': 'Cone',
  'Square-Triangle': 'Prism',
} as Record<`${Shape2D}-${Shape2D}`, Shape3D>;

function get3DShapeFromBases(bases: [Shape2D, Shape2D]): Shape3D {
  const sorted = bases.sort();
  return ReverseShapeBasesMapping[`${sorted[0]}-${sorted[1]}`];
}

const IconMapping = {
  Square: IconSquare,
  Triangle: IconTriangle,
  Circle: IconCircle,
} as Record<Shape2D, React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>>;

export {
  shapes2D,
  shapes3D,
  IconMapping,
  positions,
  is3D,
  is2D,
  ShapeBasesMapping,
  get3DShapeFromBases,
};
