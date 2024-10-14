export const formatEmailData = (data) => {
  if (data.length < 1) return;
  return data.reduce((acc, cur) => {
    acc.push({ ...cur, read: false, favourite: false });
    return acc;
  }, []);
};
