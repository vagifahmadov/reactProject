import React, { useState } from 'react';
import { FileAddOutlined } from '@ant-design/icons';
import { Button, Modal, Select, Input, AutoComplete  } from 'antd';

// autocomplate
const mockVal = (str, repeat = 1) => ({
    value: str.repeat(repeat),
  });
  

const { TextArea } = Input;
// antd select
const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}


const NewRequest = () => {
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
    // ant design modal
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
    setIsModalVisible(true);
    };

    const handleOk = () => {
    setIsModalVisible(false);
    };

    const handleCancel = () => {
    setIsModalVisible(false);
    };
    // ant design modal
    return (
        <div>
            <Button type="primary" shape='round' onClick={showModal}><FileAddOutlined />Yeni müraciət</Button>
            
            <Modal title="Yeni müraciət" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={1000} okText="Təsdiq et" cancelText="Bağla" style={{borderRadius: '10px'}}>
                <div className='continerNewReqModal'>
                    {/* telect type */}
                    <div>
                        <h5>Sorğu tipini seç: </h5>
                        <Select style={{ width: 120 }} onChange={handleChange} placeholder="Tipi seç">
                        <Option value="1">Problem</Option>
                        <Option value="2">Təklif</Option>
                        </Select>
                    </div>
                    {/* select day limit type */}
                    <div>
                        <h5>Təcililik dərəcəsini seç: </h5>
                        <Select style={{ width: 120 }} onChange={handleChange} placeholder="Vaxtı seç">
                            <Option value="1">Az təcili</Option>
                            <Option value="2">Orta təcili</Option>
                            <Option value="3">Təcili</Option>
                        </Select>
                    </div>
                    {/* select department */}
                    <div>
                        <h5>Məsul şöbəni seç: </h5>
                        <Select style={{ width: 220 }} onChange={handleChange} placeholder="Şöbəni seç">
                            {<Option value="1">Şöbə 1</Option>}
                            <Option value="2">Şöbə 2</Option>
                            <Option value="3">Şöbə 3</Option>
                        </Select>
                    </div>
                    {/* find employee */}
                    <div>
                        <h5>Kim təsdiq edəcək?:</h5>
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
                        <h5>Əlavə məlumatı daxil edin:</h5>
                        <TextArea rows={4} cols={60} placeholder="Əlavə çəlumat" />
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default NewRequest