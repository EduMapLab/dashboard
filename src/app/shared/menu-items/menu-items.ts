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
        state: 'alunos',
        short_label: 'N',
        name: 'Alunos',
        type: 'link',
        icon: 'feather users'
      },
      {
        state: 'talentos-naturais',
        short_label: 'N',
        name: 'Talentos Naturais',
        type: 'link',
        icon: 'feather award'
      },
      {
        state: 'area-estudo',
        short_label: 'N',
        name: 'Área de Estudo',
        type: 'link',
        icon: 'feather icon-pencil'
      },
      {
        state: 'tomada-decisao',
        short_label: 'N',
        name: 'Tomada de Decisão',
        type: 'link',
        icon: 'feather heart'
      },
      {
        state: 'obtensao-informacao',
        short_label: 'N',
        name: 'Obtenção de informação',
        type: 'link',
        icon: 'feather alert-circle'
      },
      {
        state: 'filme',
        short_label: 'N',
        name: 'Filme',
        type: 'link',
        icon: 'feather youtube'
      },
      {
        state: 'personalidade',
        short_label: 'N',
        name: 'Personalidades',
        type: 'link',
        icon: 'feather sun'
      },
      {
        state: 'sua-escola',
        short_label: 'N',
        name: 'Sua escola',
        type: 'link',
        icon: 'feather map'
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
