export const setUrlAndDispatchEvent = (key, value, eventName) => {
  const url = new URL(window.location);
  url.searchParams.set(key, value);
  window.history.replaceState({}, "", url);
  const urlChangeEvent = new CustomEvent(eventName);
  window.dispatchEvent(urlChangeEvent);
};

export const getParams = (name) => {
  const url = new URL(window.location);
  const val = url.searchParams.get(name);
  if (val) return val;
};
