export const numberHelper = () => {
  const getUniqueRandomNumbers = (count: number, max: number) => {
    const numbers: number[] = [];

    while (numbers.length < count) {
      const randomNumber = Math.floor(Math.random() * max);
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }

    return numbers;
  };

  return {
    getUniqueRandomNumbers,
  };
};
