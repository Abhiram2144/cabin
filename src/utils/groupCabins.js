// src/utils/groupCabins.js

export const groupCabins = (cabins, groups) => {
    const groupedCabins = groups.map(group => {
      const [start, end] = group.range;
      return {
        id: group.id,
        cabins: cabins.filter(cabin => cabin.id >= start && cabin.id <= end),
      };
    });
    return groupedCabins;
  };
  