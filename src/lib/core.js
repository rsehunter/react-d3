const numDataPoints = 10;
const randomNum = () => Math.floor(Math.random() * 100);
const randomDataSet = () => {
  return Array.apply(null, {length: numDataPoints}).map(() => [randomNum(), randomNum()]);
}

export const randomizeData = () => {
  return { data: randomDataSet() };
};
