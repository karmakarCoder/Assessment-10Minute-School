const isBrowser = typeof window !== "undefined";

// handle setting an item
export const setLocalStorage = (key, value) => {
  if (!isBrowser) return;
  try {
    const valueToStore =
      typeof value === "object" && value !== null
        ? JSON.stringify(value)
        : value;
    localStorage.setItem(key, valueToStore);
  } catch (error) {
    console.error(`Error saving to localStorage: ${error}`);
  }
};

// handle getting an item
export const getLocalStorage = (key) => {
  if (!isBrowser) return null;
  try {
    const storedValue = localStorage.getItem(key);
    if (storedValue === null) {
      return null;
    }

    try {
      return JSON.parse(storedValue);
    } catch (error) {
      return storedValue;
    }
  } catch (error) {
    console.error(`Error retrieving from localStorage: ${error}`);
    return null;
  }
};

// handle removing an item
export const removeLocalStorage = (key) => {
  if (!isBrowser) return;
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing from localStorage: ${error}`);
  }
};

// clear all items
export const clearLocalStorage = () => {
  if (!isBrowser) return;
  try {
    localStorage.clear();
  } catch (error) {
    console.error(`Error clearing localStorage: ${error}`);
  }
};
