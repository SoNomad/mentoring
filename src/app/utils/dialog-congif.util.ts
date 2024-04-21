import { User } from '../types/User';

export function dialogConfigure(user?: User, height?: string, width?: string) {
  return {
    height: height || '550px',
    width: width || '450px',
    data: user,
  };
}
