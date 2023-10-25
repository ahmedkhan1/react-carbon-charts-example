export default {
  title: 'Horizontal floating bar (time series)',
  axes: {
    left: {
      mapsTo: 'date',
      scaleType: 'time',
    },
    color: {
      pairing: {
        option: 1,
      },
    },
    bottom: {
      mapsTo: 'value',
    },
  },
  height: '400px',
};
