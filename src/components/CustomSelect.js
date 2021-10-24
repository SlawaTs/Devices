import {Select, Divider, Input} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {useState} from "react";

const {Option} = Select;

export const CustomSelect = ({items, defaultValue, mode, nameItems, onChange, addItems}) => {

    const [name, setName] = useState('');

    const onNameChange = event => {
        setName(event.target.value)

    };
    const addItem = () => {
        setName('')
        if (name !== '') {
            addItems(name, items);
        }
    }

    return (
        <Select
            placeholder={`Enter ${nameItems}`}
            mode={mode}
            onChange={value => {
                onChange(nameItems, value)
            }}
            style={{width: 240}}
            defaultValue={defaultValue}
            dropdownRender={menu => (
                <div>
                    {menu}
                    <Divider style={{margin: '4px 0'}}/>
                    <div style={{display: 'flex', flexWrap: 'nowrap', padding: 8}}>
                        <Input style={{flex: 'auto'}} value={name} onChange={onNameChange}/>
                        <a
                            style={{flex: 'none', padding: '8px', display: 'block', cursor: 'pointer'}}
                            onClick={addItem}
                        >
                            <PlusOutlined/> Add item
                        </a>
                    </div>
                </div>
            )}
        >
            {items.map(item => (
                <Option key={item.value}>{item.value}</Option>
            ))}
        </Select>

    )
}

