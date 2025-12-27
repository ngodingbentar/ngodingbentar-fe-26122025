export const formatRupiah = (amountInUSD: number): string => {
  const EXCHANGE_RATE = 16000;
  const amountInIDR = amountInUSD * EXCHANGE_RATE;

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amountInIDR);
};
