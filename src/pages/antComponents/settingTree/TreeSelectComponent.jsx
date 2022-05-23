import React, {useState} from 'react';
import { TreeSelect } from 'antd';

const TreeSelectComponent = (props) => {

  const [value, setValue] = useState(undefined);

  const onChange = (value) => {
  console.log(value);
  setValue({ value });
};
  
  return (
    <div className ='settingTables'>
      <TreeSelect 
        style={{ width: '100%' }}
        value={value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeData={props.treeData}
        placeholder="Sturukturu seç"
        treeDefaultExpandAll
        onChange={onChange}
      />
    </div>
  )
}

export default TreeSelectComponent