var opts = {
  angle: 0, // The span of the gauge arc
  lineWidth: 0.26, // The line thickness
  radiusScale: 1, // Relative radius
  pointer: {
    length: 0.57, // // Relative to gauge radius
    strokeWidth: 0.062, // The thickness
    color: '#1A1592' // Fill color
  },
  limitMax: false,     // If false, max value increases automatically if value > maxValue
  limitMin: false,     // If true, the min value of the gauge will be fixed
  colorStart: '#CF754F',   // Colors
  colorStop: '#99DAA6',    // just experiment with them
  strokeColor: '#E0E0E0',  // to see which ones work best for you
  generateGradient: true,
  highDpiSupport: true,     // High resolution support
  // renderTicks is Optional
  renderTicks: {
    divisions: 5,
    divWidth: 2.2,
    divLength: 0.7,
    divColor: '#000000',
    subDivisions: 3,
    subLength: 0.5,
    subWidth: 1.5,
    subColor: '#666666'
  }
  
};
var target = document.getElementById('foo'); // your canvas element
var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
gauge.maxValue = 3000; // set max gauge value
gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
gauge.animationSpeed = 23; // set animation speed (32 is default value)
gauge.set(975); // set actual value