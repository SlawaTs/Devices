import {Button, Table} from "antd";
import React from "react";

function addDevices (){
    const columns = [
        {
            title: 'Manufacturer',
            dataIndex: 'manufacturer',
            key: 'manufacturer',
            editable: true,
            render: ()=>(
                <input/>
            ),



        },
        {
            title: 'Model',
            dataIndex: 'model',
            key: 'model',
            editable: true,
            render: ()=>(
                <input/>
            ),

        },
        {
            title: 'OS',
            dataIndex: 'os',
            key: 'os',
            editable: true,
            render: ()=>(
                <input/>
            ),

        },
        {
            title: 'Group',
            dataIndex: 'group',
            key: 'group',
            editable: true,
            render: ()=>(
                <input/>
            ),


        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            editable: true,
            render: ()=>(
                <input/>
            ),

        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            editable: true,
            render: ()=>(
                <input/>
            ),

        },
    ];

    return <>

        <Table columns={columns} dataSource={newData} />

        <Button
            type="primary"
            style={{marginBottom: 16}}
        >
            Add device
        </Button>
    </>

};