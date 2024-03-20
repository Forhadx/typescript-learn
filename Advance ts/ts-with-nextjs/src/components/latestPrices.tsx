const LatestPrices = ({ latestPrices }: { latestPrices: ILatestPrices }) => {
  return (
    <div>
      <h1>--Latest Prices--</h1>
      <p>{latestPrices?.status}</p>
    </div>
  );
};

export default LatestPrices;
