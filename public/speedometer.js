const dataSource = {
    chart: {
      captionpadding: "0",
      origw: "320",
      origh: "300",
      gaugeouterradius: "115",
      gaugestartangle: "270",
      gaugeendangle: "-25",
      showvalue: "1",
      valuefontsize: "30",
      majortmnumber: "13",
      majortmthickness: "2",
      majortmheight: "13",
      minortmheight: "7",
      minortmthickness: "1",
      minortmnumber: "1",
      showgaugeborder: "0",
      theme: "fusion"
    },
    colorrange: {
      color: [
        {
          minvalue: "0",
          maxvalue: batterylevel,
          code: "#999999"
        },
        {
          minvalue: "110",
          maxvalue: "100",
          code: "#F6F6F6"
        }
      ]
    },
    dials: {
      dial: [
        {
          value: batterylevel,
          bgcolor: "#F20F2F",
          basewidth: "8"
        }
      ]
    },
    annotations: {
      groups: [
        {
          items: [
            {
              type: "text",
              id: "text",
              text: "kmph",
              x: "$gaugeCenterX",
              y: "$gaugeCenterY + 40",
              fontsize: "20",
              color: "#555555"
            }
          ]
        }
      ]
    }
  };
  
   setInterval(FusionCharts.ready(function() {
    var myChart = new FusionCharts({
      type: "angulargauge",
      renderAt: "chart-container",
      width: "100%",
      height: "100%",
      dataFormat: "json",
      dataSource
    }).render();
  }),5000);
  