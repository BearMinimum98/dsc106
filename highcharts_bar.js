let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://raw.githubusercontent.com/soumym/ucsd_dsc106_fa19/master/hw1/ucsd_common_converted.json', false)
xhr.send(null)
console.log(xhr.response)
let data = JSON.parse(xhr.response).map(elem => {
        return elem.map(elem2 => typeof elem2 === "string" ? parseInt(elem2.replace(/\,/g,'')) : elem2)

})

Highcharts.chart('container', {
    chart: {
                type: 'bar'

    },
    title: {
                text: 'Applicants per year'

    },
    xAxis: {
                categories: data.map(x => x[x.length - 1])

    },
    yAxis: {
                min: 0,
        title: {
                        text: 'Total applied'

        }

    },
    legend: {
                reversed: true

    },
    plotOptions: {
        series: {
                        stacking: 'normal'

        }

    },
    series: [{
                name: 'Men',
                data: data.map(x => x[1])

    }, {
                name: 'Women',
                data: data.map(x => x[x.length - 3])

    }]

});
