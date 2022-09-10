const getStatus = (status) => {
  switch (status) {
    case 'Alive':
      return 'alive';
    case 'Dead':
      return 'dead';
    default:
      return 'unknown';
  }
};

export default getStatus;
