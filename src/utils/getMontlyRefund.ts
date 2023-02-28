export const GetMontlyRefund = (monthlyRent: number) => {
  const currentMonth = new Date().getMonth(); //   // 현재 월을 구하기 - 2
  const monthsInFiveYears = 60;

  const totalRefund = monthlyRent * 0.17 * currentMonth + monthlyRent * (monthsInFiveYears - currentMonth) * 0.12;

  return Math.round(totalRefund * 10) / 10;
};
