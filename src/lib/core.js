const numDataPoints = 5;
const randomNum = () => Math.floor(Math.random() * 10);
const randomDataSet = () => {
  return Array.apply(null, {length: numDataPoints}).map(() => [randomNum(), randomNum()]);
}


export const randomizeData = () => {
  return { data: randomDataSet() };
};
