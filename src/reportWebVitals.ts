import { Metric } from 'web-vitals';


const logReport = (metric: Metric) => {
  console.log(`${metric.name} => value:${metric.value.toLocaleString()}, delta:${metric.delta.toLocaleString()}`)
}

const reportWebVitals = () => {
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS(logReport);
    getFID(logReport);
    getFCP(logReport);
    getLCP(logReport);
    getTTFB(logReport);
  });
};

export default reportWebVitals;
