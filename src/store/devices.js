import {makeObservable, action, observable, computed, toJS} from 'mobx';


const devicesServer = [
    {
        key: '1',
        manufacturer: 'HP',
        model: 'h3',
        os: 'Windows',
        ip: '000.000.000.001',
        ports: '11',
        group: ['K62', 'Office'],
        type: 'MFY',
        status: 'online',
        mac: ' 00-50-B6-5B-CA-6A'
    },
    {
        key: '2',
        manufacturer: 'Asus',
        model: 'mg46w',
        os: 'Linux',
        ip: '000.000.000.002',
        ports: '84',
        group: ['Home','K35'],
        type: 'Scanner',
        status: 'offline',
        mac: '00-D4-B6-5B-CA-6A'
    },
    {
        key: '3',
        manufacturer: 'Canon',
        model: '456dn',
        os: 'Windows',
        ip: '000.000.000.003',
        ports: '92',
        group: ['Home', 'Office'],
        type: 'Scanner',
        status: 'Offline',
        mac: '00-D4-B6-5B-CA-6A'
    },
    {
        key: '4',
        manufacturer: 'Epson',
        model: 'hr643',
        os: 'Windows',
        ip: '000.000.000.004',
        ports: '372',
        group: ['K35'],
        type: 'MFY',
        status: 'online',
        mac: '00-D4-B6-5B-CA-6A'
    },
    {
        key: '5',
        manufacturer: 'Xerox',
        model: 'mg46w',
        os: 'Windows',
        ip: '000.000.000.005',
        ports: '147',
        group: ['Home', 'K62'],
        type: 'Printer',
        status: 'online',
        mac: ' 00-D4-B6-5B-CA-6A'
    },
    {
        key: '6',
        manufacturer: 'Xerox',
        model: 'p227',
        os: 'Linux',
        ip: '000.000.000.004',
        ports: '21',
        group: ['K35', 'Office'],
        type: 'Scanner',
        status: 'online',
        mac: '00-D4-B6-5B-CA-6A'
    },
    {
        key: '7',
        manufacturer: 'Epson',
        model: 'h3',
        os: 'Linux',
        ip: '000.000.000.007',
        ports: '3',
        group: ['Home', 'Office'],
        type: 'Scanner',
        status: 'Offline',
        mac: '00-D4-B6-5B-CA-6A'
    },
    {
        key: '8',
        manufacturer: 'Canon',
        model: '456dn',
        os: 'Windows',
        ip: '000.000.000.008',
        ports: '2',
        group: ['Home', 'Office'],
        type: 'MFY',
        status: 'Offline',
        mac: ' 00-50-B6-5B-CA-6A'
    },
    {
        key: '9',
        manufacturer: 'Asus',
        model: 'mg46w',
        os: 'Windows',
        ip: '000.000.000.009',
        ports: '14',
        group: ['K62'],
        type: 'Printer',
        status: 'online',
        mac: ' 00-50-B6-5B-CA-6A'
    },
    {
        key: '10',
        manufacturer: 'HP',
        model: 'h3',
        os: 'Linux',
        ip: '000.000.000.010',
        ports: '72',
        group: ['K35'],
        type: 'Scanner',
        status: 'Offline',
        mac: '00-D4-B6-5B-CA-6A'
    },
    {
        key: '11',
        manufacturer: 'Asus',
        model: 'p227',
        os: 'Windows',
        ip: '000.000.000.011',
        ports: '72',
        group: ['Home', 'Office'],
        type: 'MFY',
        status: 'Offline',
        mac: ' 00-50-B6-5B-CA-6A'
    },
    {
        key: '12',
        manufacturer: 'Asus',
        model: 'mg46w',
        os: 'Windows',
        ip: '000.000.000.012',
        ports: '45',
        group: ['K35'],
        type: 'Printer',
        status: 'online',
        mac: ' 00-50-B6-5B-CA-6A'
    },
    {
        key: '13',
        manufacturer: 'Asus',
        model: 'hr643',
        os: 'Windows',
        ip: '000.000.000.013',
        ports: '21',
        group: ['Home', 'Office'],
        type: 'MFY',
        status: 'online',
        mac: ' 00-50-B6-5B-CA-6A'
    },
    {
        key: '14',
        manufacturer: 'Canon',
        model: 'Linux',
        os: 'Windows',
        ip: '000.000.000.014',
        ports: '12',
        group: ['K62'],
        type: 'Scanner',
        status: 'Offline',
        mac: ' 00-50-B6-5B-CA-6A'
    },
    {
        key: '15',
        manufacturer: 'Canon',
        model: 'h3',
        os: 'Windows',
        ip: '000.000.000.015',
        ports: '74',
        group: ['K35'],
        type: 'Scanner',
        status: 'Offline',
        mac: '00-D4-B6-5B-CA-6A'
    },
    {
        key: '16',
        manufacturer: 'Canon',
        model: 'p227',
        os: 'Windows',
        ip: '000.000.000.016',
        ports: '73',
        group: ['Home', 'Office'],
        type: 'Printer',
        status: 'online',
        mac: ' 00-50-B6-5B-CA-6A'
    },
    {
        key: '17',
        manufacturer: 'HP',
        model: '825',
        os: 'Linux',
        ip: '000.000.000.017',
        ports: '32',
        group: ['Home', 'K35'],
        type: 'Scanner',
        status: 'online',
        mac: '00-D4-B6-5B-CA-6A'
    },
    {
        key: '18',
        manufacturer: 'HP',
        model: 'mg46w',
        os: 'Linux',
        ip: '000.000.000.018',
        ports: '45',
        group: ['K35', 'Office'],
        type: 'MFY',
        status: 'online',
        mac: ' 00-50-B6-5B-CA-6A'
    },
    {
        key: '19',
        manufacturer: 'HP',
        model: '456dn',
        os: 'Linux',
        ip: '000.000.000.019',
        ports: '28',
        group: ['K62', 'Office'],
        type: 'Printer',
        status: 'Offline',
        mac: ' 00-50-B6-5B-CA-6A'
    },
    {
        key: '20',
        manufacturer: 'Epson',
        model: 'h3',
        os: 'Windows',
        ip: '000.000.000.020',
        ports: '373',
        group: ['K35'],
        type: 'Scanner',
        status: 'Offline',
        mac: ' 00-50-B6-5B-CA-6A'
    },
    {
        key: '21',
        manufacturer: 'Epson',
        model: 'p227',
        os: 'Windows',
        ip: '000.000.000.021',
        ports: '304',
        group: ['Home', 'Office'],
        type: 'Scanner',
        status: 'online',
        mac: ' 00-50-B6-5B-CA-6A'
    },
    {
        key: '22',
        manufacturer: 'Epson',
        model: 'mg46w',
        os: 'Windows',
        ip: '000.000.000.022',
        ports: '31',
        group: ['Home', 'K62'],
        type: 'MFY',
        status: 'online',
        mac: '00-D4-B6-5B-CA-6A'
    },
    {
        key: '23',
        manufacturer: 'Xerox',
        model: '456dn',
        os: 'Windows',
        ip: '000.000.000.023',
        ports: '388',
        group: ['Home', 'Office'],
        type: 'Printer',
        status: 'online',
        mac: ' 00-50-B6-5B-CA-6A'
    },
    {
        key: '24',
        manufacturer: 'Xerox',
        model: 'h3',
        os: 'Linux',
        ip: '000.000.000.024',
        ports: '324',
        group: ['Home', 'Office'],
        type: 'Scanner',
        status: 'Offline',
        mac: ' 00-50-B6-5B-CA-6A'
    },
    {
        key: '25',
        manufacturer: 'Xerox',
        model: 'p227',
        os: 'Windows',
        ip: '000.000.000.025',
        ports: '42',
        group: ['K35'],
        type: 'MFY',
        status: 'Offline',
        mac: '00-D4-B6-5B-CA-6A'
    },
    {
        key: '26',
        manufacturer: 'HP',
        model: 'hr643',
        os: 'Windows',
        ip: '000.000.000.026',
        ports: '37',
        group: ['K62'],
        type: 'Printer',
        status: 'online',
        mac: ' 00-50-B6-5B-CA-6A'
    },
    {
        key: '27',
        manufacturer: 'HP',
        model: 'mg46w',
        os: 'Windows',
        ip: '000.000.000.027',
        ports: '27',
        group: ['K62'],
        type: 'Scanner',
        status: 'online',
        mac: ' 00-50-B6-5B-CA-6A'
    },
    {
        key: '28',
        manufacturer: 'HP',
        model: '456dn',
        os: 'Linux',
        ip: '000.000.000.028',
        ports: '314',
        group: ['Home','K62'],
        type: 'Scanner',
        status: 'Offline',
        mac: ' 00-50-B6-5B-CA-6A'
    },
    {
        key: '29',
        manufacturer: 'HP',
        model: 'p227',
        os: 'Windows',
        ip: '000.000.000.029',
        ports: '35',
        group: ['K62', 'Office'],
        type: 'MFY',
        status: 'online',
        mac: ' 00-50-B6-5B-CA-6A'
    },
    {
        key: '30',
        manufacturer: 'Xerox',
        model: 'mg46w',
        os: 'Linux',
        ip: '000.000.000.030',
        ports: '32',
        group: ['K35'],
        type: 'Printer',
        status: 'Offline',
        mac: ' 00-50-B6-5B-CA-6A'
    },


];

class DataDevices {
    devices = devicesServer;
    devicesMaster = devicesServer;
    deleteDevice = (key) => {
        this.devices = this.devices.filter(dv => dv.key !== key);
        this.devicesMaster = this.devicesMaster.filter(dv => dv.key !== key);
    };

    addDevices = (device) => {
        this.devicesMaster.push(device)
        let x = toJS(this.devices);
        this.devices.push(device)
    };

    editDevices = (device, key) => {
        this.devices = this.devices.filter(dv => dv.key !== key);
        this.devicesMaster = this.devicesMaster.filter(dv => dv.key !== key);
        this.devices.push(device)
        this.devicesMaster.push(device)
    };

    searchDevices = (value) => {
        let flag
        if (value === '') {
            this.devices = this.devicesMaster
        }
        this.devices = this.devices.filter(dv => {
            flag = undefined
            for (let key in dv) {
                if (key !== 'port')
                    if (Array.isArray(dv[key])) {
                        {
                            if (flag === undefined || flag === -1) {
                                flag = dv[key].find(item => item.indexOf(value) !== -1)
                            } else return (true)
                        }
                    } else {
                        if (flag === undefined || flag === -1) {
                            flag = dv[key].indexOf(value)
                        } else return (true)
                    }
            }
            return (flag !== -1 && flag !== undefined)

        })

    }

    constructor() {
        makeObservable(this, {
            devices: observable,
            deleteDevice: action.bound,
            addDevices: action.bound,
            editDevices: action.bound,
            searchDevices: action.bound
        });
    };
}

export default new DataDevices();