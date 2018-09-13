var myConfig = {
    backgroundColor:'transparent',
    type: "ring",
    plot: {
        slice:'60%',
        borderWidth:0,
        animation:{
            effect:2,
            sequence:3
        }
    },
    series : [
        {
            text: "Docs",
            values : [106541],
            backgroundColor: "#00BAF2",
            lineWidth: 1,
            marker: {
                backgroundColor: '#00BAF2'
            }
        },
        {
            text: "Gallery",
            values : [56711],
            backgroundColor: "#E80C60",
            lineWidth: 1,
            marker: {
                backgroundColor: '#E80C60'
            }
        },
        {
            text: "Index",
            values : [43781],
            backgroundColor: "#9B26AF",
            lineWidth: 1,
            marker: {
                backgroundColor: '#9B26AF'
            }
        },
        {
            text: "Index",
            values : [43781],
            backgroundColor: "#23af11",
            lineWidth: 1,
            marker: {
                backgroundColor: '#9B26AF'
            }
        },
        {
            text: "Index",
            values : [43781],
            backgroundColor: "#af9016",
            lineWidth: 1,
            marker: {
                backgroundColor: '#9B26AF'
            }
        }
    ]
};

zingchart.render({
    id : 'myChart',
    data: {
        graphset: [myConfig]
    },
    height: '300',
    width: '50%'
});

zingchart.MODULESDIR = "https://cdn.zingchart.com/modules/";
ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9","ee6b7db5b51705a13dc2339db3edaf6d"];