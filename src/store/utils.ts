import { IconSquare, IconTriangle, IconCircle, IconProps, Icon } from '@tabler/icons-react';
import { Position, Shape2D, Shape3D } from './types';

const shapes2D = ['Square', 'Triangle', 'Circle'] as Shape2D[];
const shapes3D = ['Cube', 'Sphere', 'Pyramid', 'Prism', 'Cylinder', 'Cone'] as Shape3D[];
const positions = ['Left', 'Center', 'Right'] as Position[];

const IconMapping = {
  Square: IconSquare,
  Triangle: IconTriangle,
  Circle: IconCircle,
} as Record<Shape2D, React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>>;

export { shapes2D, shapes3D, IconMapping, positions };
