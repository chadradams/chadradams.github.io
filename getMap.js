function GetMap() {
    var map = new Microsoft.Maps.Map('#myMap', {
        backgroundColor: 'black',
        showLocateMeButton: true,
        showBreadcrumb: false,
        enableHighDpi: true,
        center: new Microsoft.Maps.Location(39.100105, -94.5781416),
        zoom: 2
    });
    var pin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(47.6694141, -122.1238767), {
        title: 'Microsoft Corp',
        subTitle: 'Current'
        //text: '1'
    });
    var pin2 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(38.9742502, -94.6851702), {
        title: 'Intouch Group - KC'
        //text: '1'
    });
    var pin2a = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(41.8755616, -87.6244212), {
        title: 'Intouch Group - Chicago'
        //text: '1'
    });
    var pin2b = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(40.7127281, -74.0060152), {
        title: 'Intouch Group - NYC'
        //text: '1'
    });
    var vmlYRpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(39.1241701, -94.5928393), {
        title: 'VMLY&R'
        //text: '1'
    });
    var msCA = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(43.6534817, -79.3839347), {
        title: 'Microsoft Canada'
        //text: '1'
    });
    var ucmPin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(38.7624373, -93.7409596), {
        title: 'UCM'
        //text: '1'
    });
    var extCstmr1 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(45.4972159, -73.6103642), {
        title: 'External Customer',
        subTitle: 'For Microsoft',
        color: "orange"
        //text: '1'
    });
    var extCstmr2 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(39.7348381, -104.9653271), {
        title: 'External Customer',
        subTitle: 'For Microsoft',
        color: "orange"
        //text: '1'
    });
    var extCstmr3 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(36.1672559, -115.1485163), {
        title: 'External Customer',
        subTitle: 'For Microsoft',
        color: "orange"
        //text: '1'
    });
    var extCstmr4 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(26.122506, -80.104097), {
        title: 'External Customer',
        subTitle: 'For Microsoft',
        color: "orange"
        //text: '1'
    });
    var extCstmr5 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(40.6022059, -75.4712794), {
        title: 'External Customer',
        subTitle: 'For Microsoft',
        color: "orange"
        //text: '1'
    });
    var extCstmr6 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(38.2542376, -85.759407), {
        title: 'External Customer',
        subTitle: 'For Microsoft',
        color: "orange"
        //text: '1'
    });
    var extCstmr7 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(35.4729886, -97.5170536), {
        title: 'External Customer',
        subTitle: 'For Microsoft',
        color: "orange"
        //text: '1'
    });
    var extCstmr8 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(33.7490987, -84.3901849), {
        title: 'External Customer',
        subTitle: 'For Microsoft',
        color: "orange"
        //text: '1'
    });
    var extCstmr9 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(34.7622489, -79.201248), {
        title: 'External Customer',
        subTitle: 'For Microsoft',
        color: "orange"
        //text: '1'
    });
    var extCstmr10 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(38.6264178, -90.1998378), {
        title: 'External Customer',
        subTitle: 'For Microsoft',
        color: "orange"
        //text: '1'
    });
    var extCstmr11 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(44.961742, -93.226891), {
        title: 'External Customer',
        subTitle: 'For Microsoft',
        color: "orange"
        //text: '1'
    });
    var extCstmr12 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(25.7742658, -80.1936589), {
        title: 'External Customer',
        subTitle: 'For Microsoft',
        color: "orange"
        //text: '1'
    });
    var extCstmr13 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(48.1371079, 11.5753822), {
        title: 'External Customer',
        subTitle: 'For Microsoft',
        color: "orange"
        //text: '1'
    });
    var extCstmr14 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(29.7589382, -95.3676974), {
        title: 'External Customer',
        subTitle: 'For Microsoft',
        color: "orange"
        //text: '1'
    });
    var extCstmr15 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(40.2170575, -74.7429463), {
        title: 'External Customer',
        subTitle: 'For Intouch Group',
        color: "cyan"
        //text: '1'
    });

    //Add the pushpin to the map
    map.entities.push(pin);
    map.entities.push(pin2);
    map.entities.push(pin2a);
    map.entities.push(pin2b);
    map.entities.push(vmlYRpin);
    map.entities.push(msCA);
    map.entities.push(ucmPin);
    map.entities.push(extCstmr1);
    map.entities.push(extCstmr2);
    map.entities.push(extCstmr3);
    map.entities.push(extCstmr4);
    map.entities.push(extCstmr5);
    map.entities.push(extCstmr6);
    map.entities.push(extCstmr7);
    map.entities.push(extCstmr8);
    map.entities.push(extCstmr9);
    map.entities.push(extCstmr10);
    map.entities.push(extCstmr11);
    map.entities.push(extCstmr12);
    map.entities.push(extCstmr13);
    map.entities.push(extCstmr14);
    map.entities.push(extCstmr15);
}
