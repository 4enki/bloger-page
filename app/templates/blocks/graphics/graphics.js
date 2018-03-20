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
    marker: false,
    type: 'line'
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
    title: {
      text: ''
    },
    crosshair: {
      width: 1,
      color: '#e4e8eb',
    },
    dateTimeLabelFormats: {
      day: '%Y'
    },
    lineColor: '#e4e8eb',
    categories: categories,
    tickInterval: 7,
    type: 'datetime'
  },

  yAxis: {
    gridLineColor: '#e4e8eb',
    title: {
      text: ''
    },
    crosshair: {
      width: 1,
      color: '#e4e8eb',
    },
    gridLineDashStyle: 'Dot',
    lineColor: '#e4e8eb'
  },

  legend: {
    enabled: false
  },

  tooltip: {
    headerFormat: '',
    pointFormat: '<span style="color: #fff;font-family:\'Arial\';font-size:18px;font-weight:400;line-height:18px;">{point.y}</</span><br>',
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
  series: [{
    data: subscribers
  }]
});

// Эффективность работы
Highcharts.chart('channel-views', {
  series: [{
    data: views
  }]
});
