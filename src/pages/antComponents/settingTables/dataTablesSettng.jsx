import React from 'react';
import { Table, Button } from 'antd';
// import {DeleteOutlined} from '@ant-design/icons';

// oc click
// const clickDelete =(item) => {
//     console.log(item);
// }

// const columns = [
//   {
//     title: 'Tipin adı',
//     dataIndex: 'name',
//   },
//   {
//     dataIndex: 'action',
//     render: (text, record) => (
//         <Button type="danger" onClick={() => clickDelete(record.key)}><DeleteOutlined /></Button>
//       ),
//   }
// ];
// const data = [
//   {
//     key: '1',
//     name: 'Problem',
    
//   },
//   {
//     key: '2',
//     name: 'Təklif',
//   }
// ];

const DataTablesSettng = (props) => {
  return (

    <div>
        <Table columns={props.columns} dataSource={props.datas} size="small" />
    </div>
  )
}

export default DataTablesSettng