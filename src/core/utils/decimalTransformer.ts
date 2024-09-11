import Decimal from 'decimal.js';

export class ColumnNumericTransformer {
  to(data: Decimal | number | string): string {
    return new Decimal(data).toString();
  }

  from(data: string): Decimal {
    return new Decimal(data);
  }
}
