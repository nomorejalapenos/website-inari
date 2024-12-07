import type { MenuProductData } from '@elements/MenuProduct.astro'

export const productsData: Array<MenuProductData> = [
  {
    pid: '1',
    amount: 0,
    price: '1000',
    oldPrice: false,
    categories: ['Простые карточки'],
    subcategories: false,
    labels: false,
    name: 'Карточка',
    description: false,
    feature: false,
    stats: [
      {
        title: 'Вес',
        value: '111 г.',
      },
    ],
    variants: false,
    type: 'large',
    energy: { proteins: '111', fats: '111', carbohydrates: '111', calories: '111' },
    images: ['/images/food/1.jpg'],
    detailsType: 'simple',
    setItems: false,
  },
  {
    pid: '2',
    amount: 0,
    price: '1000',
    oldPrice: false,
    categories: ['Простые карточки'],
    subcategories: ['С описанием'],
    labels: false,
    name: 'Карточка с описанием',
    description: 'Описание карточки',
    feature: false,
    stats: [
      {
        title: 'Вес',
        value: '111 г.',
      },
    ],
    variants: false,
    type: 'large',
    energy: { proteins: '111', fats: '111', carbohydrates: '111', calories: '111' },
    images: ['/images/food/2.jpg'],
    detailsType: 'simple',
    setItems: false,
  },
  {
    pid: '3',
    amount: 0,
    price: '1000',
    oldPrice: false,
    categories: ['Простые карточки'],
    subcategories: ['С иконкой eco'],
    labels: false,
    name: 'Карточка с иконкой',
    description: false,
    feature: 'eco',
    stats: [
      {
        title: 'Вес',
        value: '111 г.',
      },
    ],
    variants: false,
    type: 'large',
    energy: { proteins: '111', fats: '111', carbohydrates: '111', calories: '111' },
    images: ['/images/food/3.jpg'],
    detailsType: 'simple',
    setItems: false,
  },
  {
    pid: '4',
    amount: 0,
    price: '1000',
    oldPrice: false,
    categories: ['Простые карточки'],
    subcategories: ['С иконкой spicy'],
    labels: false,
    name: 'Карточка с иконкой',
    description: false,
    feature: 'spicy',
    stats: [
      {
        title: 'Вес',
        value: '111 г.',
      },
    ],
    variants: false,
    type: 'large',
    energy: { proteins: '111', fats: '111', carbohydrates: '111', calories: '111' },
    images: ['/images/food/1.jpg'],
    detailsType: 'simple',
    setItems: false,
  },
  {
    pid: '5',
    amount: 0,
    price: '1000',
    oldPrice: '2000',
    categories: ['Простые карточки'],
    subcategories: ['Со скидкой'],
    labels: false,
    name: 'Карточка со скидкой',
    description: false,
    feature: false,
    stats: [
      {
        title: 'Вес',
        value: '111 г.',
      },
    ],
    variants: false,
    type: 'large',
    energy: { proteins: '111', fats: '111', carbohydrates: '111', calories: '111' },
    images: ['/images/food/1.jpg'],
    detailsType: 'simple',
    setItems: false,
  },
  {
    pid: '6',
    amount: 0,
    price: '1000',
    oldPrice: false,
    categories: ['Простые карточки'],
    subcategories: ['С лейблами'],
    labels: [
      { color: '#1A8704', value: 'Новинка' },
      { color: '#E53935', value: 'Акция 10%' },
    ],
    name: 'Карточка с лейблами',
    description: false,
    feature: false,
    stats: [
      {
        title: 'Вес',
        value: '111 г.',
      },
    ],
    variants: false,
    type: 'large',
    energy: { proteins: '111', fats: '111', carbohydrates: '111', calories: '111' },
    images: ['/images/food/1.jpg'],
    detailsType: 'simple',
    setItems: false,
  },
  {
    pid: '7',
    amount: 0,
    price: '1000',
    oldPrice: false,
    categories: ['Простые карточки'],
    subcategories: ['Несколько изображений'],
    labels: false,
    name: 'Карточка с несколькими изображениями',
    description: false,
    feature: false,
    stats: [
      {
        title: 'Вес',
        value: '111 г.',
      },
    ],
    variants: false,
    type: 'large',
    energy: { proteins: '111', fats: '111', carbohydrates: '111', calories: '111' },
    images: ['/images/food/1.jpg', '/images/food/2.jpg'],
    detailsType: 'simple',
    setItems: false,
  },
  {
    pid: '8',
    amount: 0,
    price: '1000',
    oldPrice: '2000',
    categories: ['Простые карточки'],
    subcategories: [
      'С описанием',
      'С иконкой spicy',
      'Со скидкой',
      'С лейблами',
      'Несколько изображений',
    ],
    labels: [
      { color: '#1A8704', value: 'Новинка' },
      { color: '#E53935', value: 'Акция 10%' },
    ],
    name: 'Карточка со всем вместе',
    description: false,
    feature: 'spicy',
    stats: [
      {
        title: 'Вес',
        value: '111 г.',
      },
    ],
    variants: false,
    type: 'large',
    energy: { proteins: '111', fats: '111', carbohydrates: '111', calories: '111' },
    images: ['/images/food/1.jpg', '/images/food/2.jpg'],
    detailsType: 'simple',
    setItems: false,
  },
  {
    pid: '9',
    amount: 0,
    price: '1000',
    oldPrice: false,
    categories: ['Карточки с вариантами'],
    subcategories: false,
    labels: false,
    name: 'Карточка с вариантами',
    description: 'Описание карточки',
    feature: false,
    stats: [
      {
        title: 'Вес',
        value: '111 г.',
        variantProp: 'size',
      },
    ],
    variants: [
      {
        name: 'Карточка с вариантами 4 шт.',
        pid: '9-1',
        price: '1000',
        shortName: '4 шт.',
        size: '111 г.',
      },
      {
        name: 'Карточка с вариантами 8 шт.',
        pid: '9-2',
        price: '2000',
        oldPrice: '3000',
        shortName: '8 шт.',
        size: '222 г.',
      },
    ],
    type: 'large',
    energy: { proteins: '111', fats: '111', carbohydrates: '111', calories: '111' },
    images: ['/images/food/1.jpg', '/images/food/2.jpg'],
    detailsType: 'simple',
    setItems: false,
  },
  {
    pid: '10',
    amount: 0,
    price: '1000',
    oldPrice: false,
    categories: ['Карточки с сетами'],
    subcategories: false,
    labels: false,
    name: 'Карточка с сетом',
    description: 'Описание карточки',
    feature: false,
    stats: [
      {
        title: 'Вес',
        value: '111 г.',
        variantProp: 'size',
      },
      {
        title: '',
        value: '32 шт.',
        border: true,
      },
    ],
    variants: false,
    type: 'large',
    energy: { proteins: '111', fats: '111', carbohydrates: '111', calories: '111' },
    images: ['/images/food/1.jpg', '/images/food/2.jpg'],
    detailsType: 'set',
    setItems: [
      {
        description: false,
        feature: false,
        image: '/images/food/1.jpg',
        name: 'Карточка',
        pid: '1',
      },
      {
        description: 'Описание карточки',
        feature: false,
        image: '/images/food/2.jpg',
        name: 'Карточка с описанием',
        pid: '2',
      },
      {
        description: false,
        feature: 'eco',
        image: '/images/food/3.jpg',
        name: 'Карточка с иконкой',
        pid: '3',
      },
      {
        description: false,
        feature: 'spicy',
        image: '/images/food/1.jpg',
        name: 'Карточка с иконкой',
        pid: '4',
      },
    ],
  },
]
