export const keyExchange = (data = [], keyHash = []) => {
    let result = [];
    data.forEach((item) => {
      let newItem = {};
      keyHash.forEach((key) => {
        newItem[key[1]] = item[key[0]];
      });
      result.push(newItem);
    });
    return result;
  };
  