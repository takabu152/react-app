import proxy from 'http-proxy-middleware';

module.exports = function(app) {
    const headers  = {
        "Content-Type": "application/json",
    }
    app.use(proxy("/api/v1/", { target: "http://weather.livedoor.com/forecast/webservice/json/v1?city=",changeOrigin: true,secure: false,headers: headers}));  
};