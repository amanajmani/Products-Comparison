import Cherry from '../assets/images/Cherry.png';
import Nuts from '../assets/images/Nuts.png';
import Orange from '../assets/images/Orange.png';
import Strawberry from '../assets/images/Strawberry.png';

export const productsData =
[{
    "id": "1",
    "name": "Cherry",
    "image": Cherry,
    "price": "$1.99",
    "colors": ["red", "green", "blue"],
    "condition": "Fresh",
    "description": "Two Cherries",
    "vendors": ["Fresh Fruits Market", "Fruit Ninja"]
  },
  {
    "id": "2",
    "name": "Orange",
    "image": Orange,
    "price": "$2.99",
    "colors": ["green", "blue"],
    "condition": "Frozen",
    "description": "Giant Orange",
    "vendors": ["Families Market"]
  },
  {
    "id": "3",
    "name": "Nuts",
    "image": Nuts,
    "price": "$1.00",
    "colors": ["red"],
    "condition": "Frozen",
    "description": "Mixed Nuts",
    "vendors": ["Amazon Distributor"]
  },
  {
    "id": "4",
    "name": "Strawberry",
    "image": Strawberry,
    "price": "$1.49",
    "colors": ["blue"],
    "condition": "Fresh",
    "description": "Just Strawberry",
    "vendors": ["Big Basket"]
  }
]

export const filteredProducts = ['Price', 'Colors', 'Condition', 'Vendors'];
