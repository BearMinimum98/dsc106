let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://raw.githubusercontent.com/soumym/ucsd_dsc106_fa19/master/hw1/ucsd_common_converted.json', false)
xhr.send(null)
console.log(xhr.response)
let data = JSON.parse(xhr.response).map(elem => {
            return elem.map(elem2 => typeof elem2 === "string" ? parseInt(elem2.replace(/\,/g,'')) : elem2)


})

Highcharts.chart('container', {
    chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'

    },
    title: {
                text: 'Men admitted vs women admitted, 2018'

    },
    tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'

    },
    plotOptions: {
        pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.percentage:.1f} %'

            }

        }

    },
    series: [{
                name: 'Brands',
                colorByPoint: true,
        data: [{
                        name: 'Men',
                        y: data[0][0]

        }, {
                        name: 'Women',
                        y: data[0][3]

        }]

    }]

});
