import {Button, Form} from 'antd';
import React from 'react';
import 'antd/dist/antd.css'
import {observer} from 'mobx-react-lite';
import {CustomSelect} from "../../components/CustomSelect";
import {Group, Manufacturer, Model, OS, Status, Type} from "../../moks/Data";
import DataDevices from "../../store/devices";
import {NavLink} from "react-router-dom";


function EditPage(props) {
    let {editDevices, devices} = DataDevices;
    let {key} = props.match.params;
    let item = devices.find(pr => pr.key === key);
    console.log(item)

    const addItem = (name, items) => {
        if (name !== '') items.push({
            text: name,
            value: name,
        })
    };

    const changeItems = (nameItems, value) => {
        item[nameItems] = value;

    }
    const editDevice = () => {
        editDevices(item, key);
    }

    return (
        <>
            <Form
                onFinish={editDevice}
            >
                <Form.Item label="Form Layout">
                </Form.Item>
                <Form.Item label="Manufacturer">
                    <CustomSelect items={Manufacturer}
                                  nameItems="manufacturer"
                                  addItems={addItem}
                                  mode={''}
                                  onChange={changeItems}
                                  defaultValue={item.manufacturer}/>
                </Form.Item>
                <Form.Item label="Model">
                    <CustomSelect items={Model}
                                  nameItems="model"
                                  addItems={addItem}
                                  mode={''}
                                  onChange={changeItems}
                                  defaultValue={item.model}/>
                </Form.Item>
                <Form.Item label="OS">
                    <CustomSelect items={OS}
                                  nameItems="os"
                                  addItems={addItem}
                                  mode={''}
                                  onChange={changeItems}
                                  defaultValue={item.os}/>
                </Form.Item>
                <Form.Item label="Group">
                    <CustomSelect items={Group}
                                  nameItems="group"
                                  addItems={addItem}
                                  mode={'multiple'}
                                  onChange={changeItems}
                                  defaultValue={item.group}/>
                </Form.Item>
                <Form.Item label="Type">
                    <CustomSelect items={Type}
                                  nameItems="type"
                                  addItems={addItem}
                                  mode={''}
                                  onChange={changeItems}
                                  defaultValue={item.type}/>
                </Form.Item>
                <Form.Item label="Status">
                    <CustomSelect items={Status}
                                  nameItems="status"
                                  addItems={addItem}
                                  mode={''}
                                  onChange={changeItems}
                                  defaultValue={item.status}/>
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{marginBottom: 16}}
                    >
                        Save
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

export default observer(EditPage)