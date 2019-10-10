let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://raw.githubusercontent.com/soumym/ucsd_dsc106_fa19/master/hw1/ucsd_common_converted.json', false)
xhr.send(null)
console.log(xhr.response)
let data = JSON.parse(xhr.response).map(elem => {
        return elem.map(elem2 => typeof elem2 === "string" ? parseInt(elem2.replace(/\,/g,'')) : elem2)

})

Highcharts.stockChart('container', {


    rangeSelector: {
                    selected: 1

    },

    title: {
                    text: 'fulltime men admitted'

    },

    series: [{
                    name: 'AAPL',
        data: data.map(i => {
                            let newArr = []
                          newArr.push((new Date(i[i.length - 1], 0)).valueOf())
                          newArr.push(i[0])
                          return newArr

        }),
        tooltip: {
                            valueDecimals: 2

        }

    }]

});

