type OrderByType = 'asc' | 'ASC' | 'desc' | 'DESC';

const isSorted = (
  lst: number[], 
  orderBy: OrderByType
): boolean => {
  let prev = lst[0];
  for (let i = 1; i < lst.length; i++) {
    if ((orderBy === 'DESC' || orderBy === 'desc') && prev < lst[i]) {
      return false;
    }

    if ((orderBy === 'ASC' || orderBy === 'asc') && prev > lst[i]) {
      return false;
    }
    prev = lst[i];
  }
  return true;
}

export const merge = (
  collection_1: number[], 
  collection_2: number[], 
  collection_3: number[]
  ): number[] => {
  if (
    isSorted(collection_1, 'asc') && 
    isSorted(collection_3, 'asc') &&
    isSorted(collection_2, 'desc'))
  {
    return [...collection_1, ...collection_2, ...collection_3];
  }
  return [];
}

// console.log(isSorted([4,2,5], 'desc'));
