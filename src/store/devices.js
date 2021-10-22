import {makeObservable, action, observable, computed, toJS} from 'mobx';


const devicesServer = [
    {
        key: '1',
        manufacturer: 'hp',
        model: 'h3',
        os: 'Windows',
        ip: '000.000.000.000',
        ports: '32',
        group: ['home', 'office'],
        type: 'Windows',
        status: 'online',
        mac: 'cdvdf'


    },
    {
        key: '2',
        manufacturer: 'asus',
        model: 'h3',
        os: 'Linux',
        ip: '000.000.000.000',
        ports: '33',
        group: ['home'],
        type: 'Linux',
        status: 'offline',
        mac: 'cdvdf'
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