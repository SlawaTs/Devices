import {Button, Form} from 'antd';
import React from 'react';
import 'antd/dist/antd.css'
import {observer} from 'mobx-react-lite';
import {CustomSelect} from "../../components/CustomSelect";
import {Group, Manufacturer, Model, OS, Status, Type} from "../../moks/Data";
import DataDevices from "../../store/devices";
import {NavLink} from "react-router-dom";


function AddPage() {
    let {addDevices} = DataDevices;
    const addItem = (name, items) => {
        if (name !== '') items.push({
            text: name,
            value: name,
        })
    };
    let item = {
        key: '',
        manufacturer: '',
        model: '',
        os: '',
        ip: '000.000.000.000',
        ports: '32',
        group: [],
        type: '',
        status: '',
        mac: ''
    };
    const changeItems = (nameItems, value) => {
        item[nameItems] = value;
        item.key = `${parseInt(Math.random()*100)}`;
    }
    const addDevice = () => {
        addDevices(item);
    }

    return (
        <>
            <Form
                onFinish={addDevice}
            >
                <Form.Item label="Form Layout">
                </Form.Item>
                <Form.Item label="Manufacturer">
                    <CustomSelect items={Manufacturer}
                                  nameItems="manufacturer"
                                  addItems={addItem}
                                  mode={''}
                                  onChange={changeItems}/>
                </Form.Item>
                <Form.Item label="Model">
                    <CustomSelect items={Model}
                                  nameItems="model"
                                  addItems={addItem}
                                  mode={''}
                                  onChange={changeItems}/>
                </Form.Item>
                <Form.Item label="OS">
                    <CustomSelect items={OS}
                                  nameItems="os"
                                  addItems={addItem}
                                  mode={''}
                                  onChange={changeItems}/>
                </Form.Item>
                <Form.Item label="Group">
                    <CustomSelect items={Group}
                                  nameItems="group"
                                  addItems={addItem}
                                  mode={'multiple'}
                                  onChange={changeItems}/>
                </Form.Item>
                <Form.Item label="Type">
                    <CustomSelect items={Type}
                                  nameItems="type"
                                  addItems={addItem}
                                  mode={''}
                                  onChange={changeItems}/>
                </Form.Item>
                <Form.Item label="Status">
                    <CustomSelect items={Status}
                                  nameItems="status"
                                  addItems={addItem}
                                  mode={''}
                                  onChange={changeItems}/>
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{marginBottom: 16}}
                    >
                        Add device
                    </Button>
                    <NavLink to={`/`}>
                        <Button
                            type="primary"
                            style={{marginBottom: 16}}
                        >
                            List devices
                        </Button>
                    </NavLink>
                </Form.Item>
            </Form>
        </>
    );
};

export default observer(AddPage)