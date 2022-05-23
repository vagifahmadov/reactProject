import React from 'react';
import { Card, Input, Button } from 'antd';
import {PlusOutlined, DeleteOutlined} from '@ant-design/icons';
import DataTablesSettng from './antComponents/settingTables/dataTablesSettng';
import TreeSelectComponent from './antComponents/settingTree/TreeSelectComponent';

// oc click
const clickDelete =(item) => {
    console.log(item);
}

// type requests
const typeDatas = [
    {
        key: '1',
        name: 'Problem'
    },
    {
        key: '2',
        name: 'Təklif',
    }
]
const typeDataColumns = [
    {
        title: 'Tipin adı',
        dataIndex: 'name',
    },
    {
        dataIndex: 'action',
        render: (text, record) => (
            <Button type="danger" onClick={() => clickDelete(record.key)}><DeleteOutlined /></Button>
        ),
    }
]

// type time limit
const timeTypeDatas = [
    {
        key: '1',
        name: 'Az təcili',
        time: 10
    },
    {
        key: '2',
        name: 'Orta təcili',
        time: 3
    },
    {
        key: '3',
        name: 'Təcili',
        time: 1
    }
]
const timeTypeColumns = [
    {
        title: 'Vaxt tipinn adı',
        dataIndex: 'name',
    },
    {
        title: 'Gün',
        dataIndex: 'time',
    },
    {
        dataIndex: 'action',
        render: (text, record) => (
            <Button type="danger" onClick={() => clickDelete(record.key)}><DeleteOutlined /></Button>
        ),
    }
]

// decisions
const decisionDatas = [
    {
        key: '1',
        name: 'Bağlanılsın'
    },
    {
        key: '2',
        name: 'Başqasına həvalə edilsin',
    },
    {
        key: '3',
        name: 'İcra edilsin',
    }
]
const decisionColumns = [
    {
        title: 'Qərarlar',
        dataIndex: 'name',
    },
    {
        dataIndex: 'action',
        render: (text, record) => (
            <Button type="danger" onClick={() => clickDelete(record.key)}><DeleteOutlined /></Button>
        ),
    }
]

// tree structure
const treeData = [
    {
      value: '01',
      title: 'Agentlik',
      children: [
        {
          title: 'ASAN 1',
          value: '02',
        },
        {
          title: 'ASAN 2',
          value: '03',
        },
      ],
    },
    {
      title: 'ASAN QUBA',
      value: '04',
    },
    {
        title: 'ASAN QƏBƏLƏ',
        value: '05',
    },
    {
        title: 'ASAN SUMQAYIT',
        value: '06',
    },
    {
        title: 'İnnovasiyalar',
        value: '07',
        children: [
            {
              title: 'Şöbə 1',
              value: '08',
            },
            {
              title: 'Şöbə 2',
              value: '09',
            }
          ],
    },
  ];
  
// tree data
const treeDataStructure = [
    {
        key: '1',
        name: 'Şöbə 1'
    },
    {
        key: '2',
        name: 'Şöbə 2',
    },
    {
        key: '3',
        name: 'Şöbə 3',
    },
    {
        key: '4',
        name: 'Şöbə 4',
    }
]
const treeDataStructureColumns = [
    {
        title: 'Məhsul bölmə',
        dataIndex: 'name',
    },
    {
        dataIndex: 'action',
        render: (text, record) => (
            <Button type="danger" onClick={() => clickDelete(record.key)}><DeleteOutlined /></Button>
        ),
    }
]

const Settings = () => {
  return (
    <div className='settingCanvas'>
        <Card style={{borderRadius: '10px'}} title="Sorğu tupləri">
            <div className='inputSetting'><Input placeholder="Yeni sorğu" /></div><div className='addSetting'><Button type="primary"><PlusOutlined /></Button></div>
            <DataTablesSettng columns = {typeDataColumns} datas = {typeDatas} />
        </Card>

        <Card style={{borderRadius: '10px'}} title="İcranın vaxt məhdudiyyyəti tupləri">
            <div className='inputSetting'><Input placeholder="Yeni gün tipi" /></div><div className='addSetting'><Button type="primary"><PlusOutlined /></Button></div>
            <DataTablesSettng  columns = {timeTypeColumns} datas = {timeTypeDatas} />
        </Card>

        <Card style={{borderRadius: '10px'}} title="Rəhbərliyin qərarları">
            <div className='inputSetting'><Input placeholder="Yeni qərar" /></div><div className='addSetting'><Button type="primary"><PlusOutlined /></Button></div>
            <DataTablesSettng  columns = {decisionColumns} datas = {decisionDatas} />
        </Card>

        <Card style={{borderRadius: '10px'}} title="Struktur">
            <div className='inputSetting'><TreeSelectComponent treeData = {treeData} /></div><div className='addSetting'><Button type="primary"><PlusOutlined /></Button></div>
            <DataTablesSettng columns = {treeDataStructureColumns} datas = {treeDataStructure} />        
        </Card>
    </div>
  )
}

export default Settings;