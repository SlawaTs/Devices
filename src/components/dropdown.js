import {  Select, Divider, Input  } from 'antd' ;
// import {  PlusOutlined  } from 'icons';
import {observer} from "mobx-react-lite";

const { Option } = Select;


function Dropdown () {
   const state = {
        items: ['jack', 'lucy'],
        name: '',
    };
    const { items, name } = state;
    let onNameChange = (e) => {
        state.name = e.target.value

    };

    let addItem = () => {
        console.log('addItem');
        const { items, name } = this.state;
        this.setState({
            items: [...items, name || `New item ${state.items.length}`],
            name: '',
        });
    };

    return (
            <Select
                style={{ width: 240 }}
                dropdownRender={menu => (
                    <div>
                        {menu}
                        <Divider style={{ margin: '4px 0' }} />
                        <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                            <Input style={{ flex: 'auto' }} value={name} onChange={onNameChange} />
                            <a
                                style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
                                onClick={addItem}
                            >
                                 Add item
                            </a>
                        </div>
                    </div>
                )}
            >
                {items.map(item => (
                    <Option key={item}>{item}</Option>
                ))}
            </Select>
        );
    }

export default observer(Dropdown)
