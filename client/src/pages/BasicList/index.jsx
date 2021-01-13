import { List, Avatar } from 'antd';
import React, { useState, useEffect } from 'react';
import { useIntl } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
/**
 * 添加节点
 * @param fields
 */
const proxyurl = "https://cors-anywhere.herokuapp.com/";

const BasicList = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // setUserData(getUserData());
    fetch(proxyurl + "https://apitest2021.herokuapp.com/api/fetch",
        {   method:'GET',
            mode: 'cors',
            headers:{
                'Access-Control-Allow-Origin': 'http://localhost:5000',
                "Content-Type": 'application/json'
            },
        })
      .then(res => res.json())
      .then(
        (result) => {
          setUserData(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log("error => ", error);
        }
      )
  }, [])
  const intl = useIntl();
  
  return (
    <PageContainer>
      <List
        itemLayout="horizontal"
        dataSource={userData}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href="https://ant.design">{item.name}</a>}
              description={"profession: " + item.profession}
            />
          </List.Item>
        )}
      />
    </PageContainer>
  );
};

export default BasicList;
