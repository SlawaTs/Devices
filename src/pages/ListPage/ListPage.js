import {Space, Popconfirm, Table, Button, Tag, Pagination, Popover} from 'antd';
import React from 'react';
import DataDevices from './../../store/devices';
import 'antd/dist/antd.css'
import {observer} from 'mobx-react-lite';
import {Group, Manufacturer, Model, OS, Status, Type} from "../../moks/Data";
import {NavLink} from "react-router-dom";
import {history} from "../../utils/history";
import {toJS, values} from "mobx";
import Search from "antd/es/input/Search";
import {DeleteTwoTone, EditTwoTone, ProfileTwoTone, ReadOutlined} from "@ant-design/icons";
import './ListPage.css'

function listDevices() {

    const renderGroup = (Group) => {
        return (<>
            {Group.map(tag => (
                <Tag key={tag}>
                    {tag}
                </Tag>
            ))}
        </>)
    }
    const filtedGroup = (value, record) => {
        if (record.group.includes(value))
            return true
    }
    const onSearch = (value, record) => {
        if (record.includes(value))
            return true
    }

    const columns = [
        {
            title: 'Manufacturer',
            dataIndex: 'manufacturer',
            key: 'manufacturer',
            filters: Manufacturer,
            onFilter: (value, record) => record.manufacturer === value,

        },
        {
            title: 'Model',
            dataIndex: 'model',
            key: 'model',
            filters: Model,
            onFilter: (value, record) => record.model === value,


        },
        {
            title: 'IP',
            dataIndex: 'ip',
            key: 'ip',

        },
        {
            title: 'MAC',
            dataIndex: 'mac',
            key: 'model',

        },
        {
            title: 'OS',
            dataIndex: 'os',
            key: 'os',
            filters: OS,
            onFilter: (value, record) => record.os === value,


        },
        {
            title: 'Ports',
            dataIndex: 'ports',
            key: 'ports',
        },
        {
            title: 'Group',
            dataIndex: 'group',
            key: 'group',
            filters: Group,
            onFilter: (value, record) => filtedGroup(value, record),
            render: (Group) => renderGroup(Group)

        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            filters: Type,
            onFilter: (value, record) => record.type === value,


        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            filters: Status,
            onFilter: (value, record) => record.status === value,

        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                <Space size="middle">
                    <NavLink to={`/detail/${record.key}`}>
                        <Popover content="Detail">
                            <ProfileTwoTone/>
                        </Popover>
                    </NavLink>
                    <NavLink to={`/edit/${record.key}`}>
                        <Popover content="Edit">
                        <EditTwoTone/>
                        </Popover>
                    </NavLink>
                    <Popconfirm title="Sure to delete?" onConfirm={() => deleteDevice(record.key)}>
                        <Popover content="Delete">
                        <DeleteTwoTone/>
                        </Popover>
                    </Popconfirm>
                </Space>
            ),
        },
    ];
    let {devices, searchDevices, deleteDevice} = DataDevices;

    return <div className="list-page">
        <h1>
            Complete list of devices
        </h1>
        <div style={{display: 'flex', alignItems: 'center',}}>
            <Button
                onClick={() => history.push('/add')}
                type="primary"
            >
                Add device
            </Button>
            <Search
                style={{width: '300px', margin: '1em', marginLeft: 'auto'}}
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={(value) => searchDevices(value)}
            /></div>

        <Table columns={columns} dataSource={devices} pagination={{showSizeChanger: true}}/>
    </div>
};

export default observer(listDevices)
