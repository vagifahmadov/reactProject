import React, { useState } from 'react';
import { Table,  Modal,  Select, Input, AutoComplete  } from 'antd';

// data table structure
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '5',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '6',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];
// autocomplate
const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});
// antd text area
const { TextArea } = Input;
// antd select
const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const DataTables = () => {
  // antd autocomplate
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);

  const onSearch = (searchText) => {
      setOptions(
      !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
      );
  };

  const onSelect = (data) => {
      console.log('onSelect', data);
  };

  const onChange = (data) => {
      setValue(data);
  };
  // modal
  const [modal, setModal] = useState({
    visible: false,
    data: null,
    modalTitle: "",
    typeReq: "",
    reqId: ""
  })

  // oc click
  const clickRow =(item) => {
    // console.log(item);
    setModal(old => ({...old, modalTitle: item.name, visible: true, typeReq: item.age, reqId: item.key}));
  }

  const handleOk = () => {
    setModal(old => ({...old, visible: false}));
  };

  return (
    <div className='dataTables'>
      <Table columns={columns} dataSource={data} size="middle" pagination={{defaultPageSize: 4}} onRow={(r) => ({onClick: () => (clickRow(r))})} />

         <Modal
          okText="T??sdiq et" cancelText="Ba??la"
          title={modal.modalTitle}
          centered
          visible={modal.visible}
          //onOk={() => setVisible(false)}
          onCancel={() => setModal(old => ({...old, visible: false}))}
          onOk = {handleOk}
          width={1000}
          >
            <p>M??raci??t id: {modal.reqId}</p>
            <p>M??raci??t tipi: {modal.typeReq}</p>
            <div className='continerNewReqModal'>
              {/* telect type */}
                <div>
                  <h5>Sor??u tipini se??: </h5>
                  <Select style={{ width: 120 }} onChange={handleChange} placeholder="Tipi se??">
                  <Option value="1">Problem</Option>
                  <Option value="2">T??klif</Option>
                  </Select>
                </div>
                {/* select day limit type */}
                <div>
                    <h5>T??cililik d??r??c??sini se??: </h5>
                    <Select style={{ width: 120 }} onChange={handleChange} placeholder="Vaxt?? se??">
                        <Option value="1">Az t??cili</Option>
                        <Option value="2">Orta t??cili</Option>
                        <Option value="3">T??cili</Option>
                    </Select>
                </div>
                {/* select department */}
                <div>
                    <h5>M??sul ????b??ni se??: </h5>
                    <Select style={{ width: 220 }} onChange={handleChange} placeholder="????b??ni se??">
                        {<Option value="1">????b?? 1</Option>}
                        <Option value="2">????b?? 2</Option>
                        <Option value="3">????b?? 3</Option>
                    </Select>
                </div>
                {/* find employee */}
                <div>
                    <h5>Kim t??sdiq ed??c??k?:</h5>
                    <AutoComplete
                        value={value}
                        options={options}
                        style={{
                        width: 200,
                        }}
                        onSelect={onSelect}
                        onSearch={onSearch}
                        onChange={onChange}
                        placeholder="Kim?"
                    />
                </div>
                {/* description */}
                <div>
                    <h5>??lav?? m??lumat?? daxil edin:</h5>
                    <TextArea rows={4} cols={60} placeholder="??lav?? ????lumat" />
                </div>
            </div>
      </Modal>

     
    </div>
  )
}

export default DataTables