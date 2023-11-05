// Data
const reviews = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: true,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: false,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: true,
    date: "27-03-2021",
  },
];

//  Logic
export default function learnTsFunctions() {
  const getAvgRating = function getAverageRating(starArray: number[]): number {
    return starArray.reduce((acc, curr) => acc + curr) / starArray.length;
  };
  const starRatings = [1, 2, 3, 4, 5, 3, 4, 5, 4, 2];
  const avg = getAvgRating(starRatings);
  console.log(avg);
}
