type Color = "green" | "yellow" | "blue";
type Coordinates = [number, number];

interface IOrder {
  OrderType: string;
  Price: number;
  Volume: number;
}

interface IOrderbook {
  BuyOrders: IOrder;
  CreatedTimestampUtc: string;
  SellOrders: IOrder;
}

interface IPrice {
  bid: string;
  ask: string;
  last: string;
}

interface IPrices {
  btc: IPrice;
  ltc: IPrices;
}

interface ILatestPrices {
  status: string;
  prices: IPrices;
}
