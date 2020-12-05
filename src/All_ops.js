export let optionsCO = {
    
    title: {
      text: 'Concentração de CO',
      align: 'center',
      margin: 12,
      style: { 
          color: '#000000',
      },
    },
  
    xAxis: {
      type: 'datetime',
      gridLineWidth: 1,
      gridLineDashStyle:'dash',
      gridLineColor: '#000000',
      title:{
        text: 'Amostra',
        margin: 15,
        align: 'middle',
        style: {
            color:'#000000',
            fontSize:'14px'
        },
      },
      labels:{
        style:
          {
            color:'#000000',
            fontSize:'12px',
          }
      },
      lineColor:'black',
      minTickInterval: 1,
    },
              
    yAxis: {
      minPadding: 0.2,
      maxPadding: 0.2,
      title: {
        text: 'PPM',
        margin: 15,
        align: 'middle',
        style: {
          color:'#000000',
          fontSize:'14px'
        },
      },
      labels:{
        style:
          {
            color:'#000000',
            fontSize:'12px',
          }
     },
      lineColor:'black',
      gridLineWidth: 2,
    },
    plotOptions: {
      series: {
        marker: {
          fillColor: '#000000',
          lineWidth: 0,
          radius:4,
          states:{
            hover:{
              lineWidthPlus:0,
              radiusPlus:3,
              lineColor:'#000000'
            },
          }
        }
      },
      pointStart: Date.now(),
    },
    series: [{
      color: '#c23d23',
      lineColor: '#c23d23',
      type: 'area',
      name: 'CO',
      data: []
    }]
  }


  export let optionsCO2 = {
    title:
    {
        text: 'Concentração de CO2',
        align: 'center',
        margin: 12,
        style: { 
            color: '#000000',
        },
    },
    xAxis: {
        type: 'datetime',
        gridLineWidth: 1,
        gridLineDashStyle:'dash',
        gridLineColor: '#000000',
        title:{
            text: 'Amostra',
            margin: 15,
            align: 'middle',
            style: {
                color:'#000000',
                fontSize:'14px'
            },
        },
        labels:{
            style:
                {
                color:'#000000',
                fontSize:'12px',
                },
                format: '{value:%H:%M:%S}',
                rotation: 45,
                align: 'left'
                
        },
        lineColor:'black',
        minTickInterval: 1,

    },
    yAxis: {
        minPadding: 0.2,
        maxPadding: 0.2,
        title: {
            text: 'PPM',
            margin: 15,
            align: 'middle',
            style: {
                color:'#000000',
                fontSize:'14px'
            },
        },
        labels:{
            style:
                {
                color:'#000000',
                fontSize:'12px',
                }
        },
        lineColor:'black',
        gridLineWidth: 2,
    },
    plotOptions: {
        series: {
            marker: {
                fillColor: '#000000',
                lineWidth: 0,
                radius:4,
                states:{
                    hover:{
                        lineWidthPlus:0,
                        radiusPlus:3,
                        lineColor:'#000000'
                    },
                }
            }
        },
        dataLabels: [{
            format: '{value:%H:%M:%S}',
        }],
        pointStart: new Date.now(),
    },
    series: [{
        lineColor: '#1d82b8',
        type: 'area',
        name: 'CO2',
        data: []
    }]
  }

  export let optionsO3 = {
    title:
            {
                text: 'Concentração de O3',
                align: 'center',
                margin: 12,
                style: { 
                    color: '#000000',
                },
            },
            xAxis: {
                type: 'datetime',
                gridLineWidth: 1,
                gridLineDashStyle:'dash',
                gridLineColor: '#000000',
                title:{
                    text: 'Amostra',
                    margin: 15,
                    align: 'middle',
                    style: {
                        color:'#000000',
                        fontSize:'14px'
                    },
                },
                labels:{
                    style:
                        {
                        color:'#000000',
                        fontSize:'12px',
                        }
                },
                lineColor:'black',
                minTickInterval: 1,
            },
            yAxis: {
                minPadding: 0.2,
                maxPadding: 0.2,
                title: {
                    text: 'PPM',
                    margin: 15,
                    align: 'middle',
                    style: {
                        color:'#000000',
                        fontSize:'14px'
                    },
                },
                labels:{
                    style:
                        {
                        color:'#000000',
                        fontSize:'12px',
                        }
                },
                lineColor:'black',
                gridLineWidth: 2,
            },
            plotOptions: {
                series: {
                    marker: {
                        fillColor: '#000000',
                        lineWidth: 0,
                        radius:4,
                        states:{
                            hover:{
                                lineWidthPlus:0,
                                radiusPlus:3,
                                lineColor:'#000000'
                            },
                        }
                    }
                },
                pointStart: Date.now(),
            },           
            series: [{
                color:'#ffff80',
                lineColor: '#ffff00',
                type: 'area',
                name: 'O3',
                data: []
            }]
  }

  export let optionsNO2 = {
    title:
            {
                text: 'Concentração de NO2',
                align: 'center',
                margin: 12,
                style: { 
                    color: '#000000',
                },
            },
            xAxis: {
                type: 'datetime',
                gridLineWidth: 1,
                gridLineDashStyle:'dash',
                gridLineColor: '#000000',
                title:{
                    text: 'Amostra',
                    margin: 15,
                    align: 'middle',
                    style: {
                        color:'#000000',
                        fontSize:'14px'
                    },
                },
                labels:{
                    style:
                        {
                        color:'#000000',
                        fontSize:'12px',
                        }
                },
                lineColor:'black',
                minTickInterval: 1,
            },
            yAxis: {
                minPadding: 0.2,
                maxPadding: 0.2,
                title: {
                    text: 'PPM',
                    margin: 15,
                    align: 'middle',
                    style: {
                        color:'#000000',
                        fontSize:'14px'
                    },
                },
                labels:{
                    style:
                        {
                        color:'#000000',
                        fontSize:'12px',
                        }
                },
                lineColor:'black',
                gridLineWidth: 2,
            },
            plotOptions: {
                series: {
                    marker: {
                        fillColor: '#000000',
                        lineWidth: 0,
                        radius:4,
                        states:{
                            hover:{
                                lineWidthPlus:0,
                                radiusPlus:3,
                                lineColor:'#000000'
                            },
                        }
                    }
                },
                pointStart: new Date.now(),
            },
            series: [{
                color: '#90ee90',
                lineColor: '#00ff00',
                name: 'NO2',
                type: 'area',
                data: []
            }]
  }

  export let optionsSO2 = {
    title:
    {
        text: 'Concentração de SO2',
        align: 'center',
        margin: 12,
        style: { 
            color: '#000000',
        },
    },
    xAxis: {
        type: 'datetime',
        gridLineWidth: 1,
        gridLineDashStyle:'dash',
        gridLineColor: '#000000',
        title:{
            text: 'Amostra',
            margin: 15,
            align: 'middle',
            style: {
                color:'#000000',
                fontSize:'14px'
            },
        },
        labels:{
            style:
                {
                color:'#000000',
                fontSize:'12px',
                }
        },
        lineColor:'black',
        minTickInterval: 1,

     },
    yAxis: {
        minPadding: 0.2,
        maxPadding: 0.2,
        title: {
            text: 'PPM',
            margin: 15,
            align: 'middle',
            style: {
                color:'#000000',
                fontSize:'14px'
            },
        },
        labels:{
            style:
                {
                color:'#000000',
                fontSize:'12px',
                }
        },
        lineColor:'black',
        gridLineWidth: 2,
    },
    plotOptions: {
        series: {
            marker: {
                fillColor: '#000000',
                lineWidth: 0,
                radius:4,
                states:{
                    hover:{
                        lineWidthPlus:0,
                        radiusPlus:3,
                        lineColor:'#000000'
                    },
                }
            }
        },
        pointStart: Date.now(),
    },
    series: [{
        color: '#ffbc40',
        lineColor: '#ffa500',
        name: 'SO2',
        type: 'area',
        data: [],
    }]
  }