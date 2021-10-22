import {Descriptions, Badge, Button} from 'antd';
import {observer} from "mobx-react-lite";
import DataDevices from "../../store/devices";
import {NavLink} from "react-router-dom";

function detailDevice(props) {
    let {devices} = DataDevices;
    let {key} = props.match.params;
    let item = devices.find(pr => pr.key === key);

    return <>
        <Descriptions title="Device info" bordered>
            <Descriptions.Item label="Manufacturer:">{item.manufacturer}</Descriptions.Item>
            <Descriptions.Item label="Model:">{item.model}</Descriptions.Item>
            <Descriptions.Item label="IP address:">{item.ip}</Descriptions.Item>
            <Descriptions.Item label="MAC address:">{item.mac}</Descriptions.Item>
            <Descriptions.Item label="Ports:" span={2}>{item.ports}</Descriptions.Item>
            <Descriptions.Item label="Groups:" span={3}>{item.group.join(', ')}</Descriptions.Item>
            <Descriptions.Item label="Status">
                <Badge status={(item.status === 'online') ? 'success' : 'error'} text={item.status}/>
            </Descriptions.Item>
            <Descriptions.Item label="Operating system:">{item.os}</Descriptions.Item>
            <Descriptions.Item label="Type:">{item.type}</Descriptions.Item>
            <Descriptions.Item label="Config Info" span={3}>
                Data disk type: MongoDB
                <br/>
                Database version: 3.4
                <br/>
                Package: dds.mongo.mid
                <br/>
                Storage space: 10 GB
                <br/>
                Replication factor: 3
                <br/>
                Region: East China 1<br/>
            </Descriptions.Item>
        </Descriptions>
        <NavLink to={`/edit/${key}`}>
            <Button
                type="primary"
                style={{marginBottom: 16}}
            >
                Edit device
            </Button>
        </NavLink>
        <NavLink to={`/`}>
            <Button
                type="primary"
                style={{marginBottom: 16}}
            >
                List devices
            </Button>
        </NavLink>
    </>
}

export default observer(detailDevice)
