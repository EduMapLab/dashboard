import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Navigation',
    main: [
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'Geral',
        type: 'link',
        icon: 'icon-home',
      },
      {
        state: 'Alunos',
        short_label: 'N',
        name: 'Alunos',
        type: 'link',
        icon: 'icon-users'
      },
      {
        state: 'Talentos Naturais',
        short_label: 'N',
        name: 'Talentos Naturais',
        type: 'link',
        icon: 'icon-layout-cta-right'
      },
      {
        state: 'navigation',
        short_label: 'N',
        name: 'Área de Estudo',
        type: 'link',
        icon: 'feather icon-pencil'
      },
      {
        state: 'navigation',
        short_label: 'N',
        name: 'Tomada de Decisão',
        type: 'link',
        icon: 'icon-layout-cta-right'
      },
      {
        state: 'navigation',
        short_label: 'N',
        name: 'Obtenção de informação',
        type: 'link',
        icon: 'icon-layout-cta-right'
      },
      {
        state: 'navigation',
        short_label: 'N',
        name: 'Filme',
        type: 'link',
        icon: 'icon-play'
      },
      {
        state: 'navigation',
        short_label: 'N',
        name: 'Personalidades',
        type: 'link',
        icon: 'icon-layout-cta-right'
      },
      {
        state: 'navigation',
        short_label: 'N',
        name: 'Sua escola',
        type: 'link',
        icon: 'icon-layout-cta-right'
      },
    ],
  },
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
