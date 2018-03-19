Highcharts.theme = {

  lang: {
    loading: 'Загрузка...',
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    shortMonths: ['янв', 'фев', 'март', 'апр', 'май', 'июнь', 'июль', 'авг', 'сент', 'окт', 'нояб', 'дек'],
    exportButtonTitle: "Экспорт",
    printButtonTitle: "Печать",
    rangeSelectorFrom: "С",
    rangeSelectorTo: "По",
    rangeSelectorZoom: "Период",
    downloadPNG: 'Скачать PNG',
    downloadJPEG: 'Скачать JPEG',
    downloadPDF: 'Скачать PDF',
    downloadSVG: 'Скачать SVG',
    printChart: 'Напечатать график',
    resetZoom: 'Отключить масштабирование'
  },

  colors: ['#0090c5'],

  chart: {
    zoomType: 'x',
    panning: true,
    panKey: 'shift',
    followPointer: false,
    marker: false
  },

  exporting: {
    enabled: false
  },

  title: {
    text: '',
    style: {
      display: 'none'
    }
  },

  plotOptions: {
    series: {
      marker: {
        enabled: false,
        fillColor: '#2da4cf',
        radius: 1,
        lineWidth: 1,
        width: 1,
        height: 1,
        lineColor: null // inherit from series
      }
    }
  },

  xAxis: {
    type: 'datetime',
    title: {
      text: ''
    },
    crosshair: {
      width: 1,
      color: '#e1e1e1'
    }
  },

  yAxis: {
    gridLineColor: '#f7f7f7',
    title: {
      text: ''
    },
    crosshair: {
      width: 1,
      color: '#e1e1e1'
    }
  },

  legend: {
    enabled: false
  },

  tooltip: {
    headerFormat: '',
    pointFormat: '<span style="color: #fff;font-family:\'Arial\';font-size:18px;font-weight:400;line-height:18px;">{point.y}</span><br>',
    backgroundColor: null,
    borderWidth: 0,
    shared: true,
    shadow: false,
    useHTML: true,
    style: {
      padding: 0
    },
  }
};

Highcharts.setOptions(Highcharts.theme);

// Эффективность работы
Highcharts.chart('channel-subscribers', {
  chart: {
    type: 'line'
  },

  xAxis: {
    type: 'datetime',
    dateTimeLabelFormats: {
      day: '%e %b'
    }
  },

  series: [{
    total: '27 %',
    data: [
      [Date.UTC(2017,0,16),1405],
      [Date.UTC(2017,0,17),1398],
      [Date.UTC(2017,0,18),1199],
      [Date.UTC(2017,0,19),1238],
      [Date.UTC(2017,0,20),1349],
      [Date.UTC(2017,0,21),1462],
      [Date.UTC(2017,0,22),1474],
      [Date.UTC(2017,0,23),1243],
      [Date.UTC(2017,0,24),1310],
      [Date.UTC(2017,0,25),1398],
      [Date.UTC(2017,0,26),1277],
      [Date.UTC(2017,0,27),1392],
      [Date.UTC(2017,0,28),1187],
      [Date.UTC(2017,0,29),1387],
      [Date.UTC(2017,0,30),1287],
      [Date.UTC(2017,0,31),1187],
      [Date.UTC(2017,1,1),1587]
    ]
  }]
});

// Эффективность работы
Highcharts.chart('channel-views', {
  chart: {
    type: 'line'
  },

  xAxis: {
    type: 'datetime',
    dateTimeLabelFormats: {
      day: '%e %b'
    }
  },

  series: [{
    total: '27 %',
    data: [
      [Date.UTC(2017,0,16),1405],
      [Date.UTC(2017,0,17),1398],
      [Date.UTC(2017,0,18),1199],
      [Date.UTC(2017,0,19),1238],
      [Date.UTC(2017,0,20),1349],
      [Date.UTC(2017,0,21),1462],
      [Date.UTC(2017,0,22),1474],
      [Date.UTC(2017,0,23),1243],
      [Date.UTC(2017,0,24),1310],
      [Date.UTC(2017,0,25),1398],
      [Date.UTC(2017,0,26),1277],
      [Date.UTC(2017,0,27),1392],
      [Date.UTC(2017,0,28),1187],
      [Date.UTC(2017,0,29),1387],
      [Date.UTC(2017,0,30),1287],
      [Date.UTC(2017,0,31),1187],
      [Date.UTC(2017,1,1),1587]
    ]
  }]
});
