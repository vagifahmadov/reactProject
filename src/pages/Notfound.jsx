import React from 'react'
// ant design
import { Result, Button } from 'antd';
// ant design

const Notfound = () => {
  return (
    <div className='notFound'>
      <Result
        status="404"
        title="404"
        subTitle="Səhifə tpılmadı."
        // extra={<Button type="primary">Baş səhifəyə qayıd</Button>}
      />
    </div>
  )
}

export default Notfound