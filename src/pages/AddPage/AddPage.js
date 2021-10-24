import {message, Button, Form, Input} from 'antd';
import React from 'react';
import 'antd/dist/antd.css'
import {observer} from 'mobx-react-lite';
import {CustomSelect} from "../../components/CustomSelect";
import {Group, Manufacturer, Model, OS, Status, Type} from "../../moks/Data";
import DataDevices from "../../store/devices";
import {NavLink} from "react-router-dom";
import './AddPage.css'


function AddPage() {
    const [form] = Form.useForm();
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
        item.key = `${parseInt(Math.random() * 100)}`;
    };
    const addDevice = () => {
        addDevices(item);
        message.success('Add device');
        form.resetFields();
    };

    let rulesItem = [
            {
                required: true,
                message: 'The field must not be empty',
            }];

    return (
        <div className="content-page__add">
            <Form
                form={form}
                onFinish={addDevice}
            >
                <h1>
                    Adding new device
                </h1>
                <div className="form-content__add">

                    <Form.Item label="Manufacturer"
                               name={'manufacturer'}
                               rules={rulesItem}>
                        <CustomSelect items={Manufacturer}
                                      nameItems="manufacturer"
                                      addItems={addItem}
                                      mode={''}
                                      onChange={changeItems}
                        />
                    </Form.Item>
                    <Form.Item label="Model"
                               name={'model'}
                               rules={rulesItem}>
                        <CustomSelect items={Model}
                                      nameItems="model"
                                      addItems={addItem}
                                      mode={''}
                                      onChange={changeItems}/>
                    </Form.Item>
                    <Form.Item label="OS"
                               name={'os'}
                               rules={rulesItem}>
                        <CustomSelect items={OS}
                                      nameItems="os"
                                      addItems={addItem}
                                      mode={''}
                                      onChange={changeItems}/>
                    </Form.Item>
                    <Form.Item label="Group"
                               name={'group'}
                               rules={rulesItem}>
                        <CustomSelect items={Group}
                                      nameItems="group"
                                      addItems={addItem}
                                      mode={'multiple'}
                                      onChange={changeItems}/>
                    </Form.Item>
                    <Form.Item label="Type"
                               name={'type'}
                               rules={rulesItem}>
                        <CustomSelect items={Type}
                                      nameItems="type"
                                      addItems={addItem}
                                      mode={''}
                                      onChange={changeItems}/>
                    </Form.Item>
                    <Form.Item label="Status"
                               name={'status'}
                               rules={rulesItem}>
                        <CustomSelect items={Status}
                                      nameItems="status"
                                      addItems={addItem}
                                      mode={''}
                                      onChange={changeItems}/>
                    </Form.Item>
                </div>
                <Form.Item className="case-button__add">
                    <Button
                        className="button-item__add"
                        type="primary"
                        htmlType="submit"
                    >
                        Add device
                    </Button>
                    <NavLink to={`/`}>
                        <Button
                            className="button-item__add"
                            type="primary"
                        >
                            List devices
                        </Button>
                    </NavLink>
                </Form.Item>
            </Form>
        </div>
    );
};

export default observer(AddPage)