import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    console.log("Getinitial in server from myapp")
    return axios.create({
      baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers,
    });
  } else {
    console.log("Getinitial in browser")
    return axios.create({
      baseUrl: '/',
    });
  }
};