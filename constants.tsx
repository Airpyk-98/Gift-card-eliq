
import React from 'react';
import { Transaction, GiftCardRate } from './types';

export const MOCK_RATES: GiftCardRate[] = [
  { asset: 'Amazon', rate: 750, icon: 'card_giftcard' },
  { asset: 'Steam', rate: 1240, icon: 'sports_esports' },
  { asset: 'Apple', rate: 900, icon: 'redeem' },
  { asset: 'Google Play', rate: 850, icon: 'shop' },
  { asset: 'Netflix', rate: 600, icon: 'movie' },
];

export const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: '1',
    asset: 'Amazon Gift Card',
    amount: 50.00,
    currency: 'USD',
    status: 'COMPLETED',
    time: '2:30 PM',
    icon: 'shopping_cart'
  },
  {
    id: '2',
    asset: 'Apple Gift Card',
    amount: -25.00,
    currency: 'USD',
    status: 'PENDING',
    time: '11:15 AM',
    icon: 'redeem'
  },
  {
    id: '3',
    asset: 'Starbucks Card',
    amount: 15.00,
    currency: 'USD',
    status: 'FAILED',
    time: '9:45 AM',
    icon: 'coffee'
  },
  {
    id: '4',
    asset: 'Steam Wallet',
    amount: 100.00,
    currency: 'USD',
    status: 'COMPLETED',
    time: 'Yesterday, 8:20 AM',
    icon: 'sports_esports'
  }
];
