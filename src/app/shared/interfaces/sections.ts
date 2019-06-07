/**
 * Interface for sections
 */

export interface Sections {
  user: NavLink[][] | DetailedNavLink[][];
  products: NavLink[][] | DetailedNavLink[][];
}


export interface NavLink {
  url: string;
  title: string;
  key: string;
}

export interface DetailedNavLink extends NavLink {
  thumbnail: string;
  description: string;
}
