import complexQueryBuilder, { QueryObject } from '.';

const query1: QueryObject = {
  page: 10,
  theme: 'dark',
  features: ['view', 'edit', 'notify'],
  highContrast: false,
  date: {
    day: 15,
    month: 12,
    year: 2020,
  },
};

console.log(complexQueryBuilder(query1));

// with parent
console.log(complexQueryBuilder(query1, 'dashboard'));
