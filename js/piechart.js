var myConfig = {
    backgroundColor:'transparent',
    type: "ring",
    plot: {
        slice:'55%',
        borderWidth:0,
        animation:{
            effect:2,
            sequence:3
        }
    },
    series : [
        {
            text: "Docs",
            values : [66541],
            lineWidth: 1,
            backgroundColor: '#00BAF2',
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
            backgroundColor: "#af4cab",
            lineWidth: 1,
            marker: {
                backgroundColor: '#af4cab'
            }
        },
        {
            text: "Index",
            values : [43781],
            backgroundColor: "#23af11",
            lineWidth: 1,
            marker: {
                backgroundColor: '#23af11'
            }
        },
        {
            text: "Index",
            values : [42781],
            backgroundColor: "#23afaf",
            lineWidth: 1,
            marker: {
                backgroundColor: '#23afaf'
            }
        },
        {
            text: "Index",
            values : [33781],
            backgroundColor: "#af9016",
            lineWidth: 1,
            marker: {
                backgroundColor: '#af9016'
            }
        }
    ]
};

zingchart.render({
    id : 'myChart',
    data: {
        graphset: [myConfig]
    },
    height: '246',
    width: '233'
});

zingchart.MODULESDIR = "https://cdn.zingchart.com/modules/";
ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9","ee6b7db5b51705a13dc2339db3edaf6d"];