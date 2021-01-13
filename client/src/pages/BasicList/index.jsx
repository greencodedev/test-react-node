import { Button, message, Input, Drawer, List, Avatar } from 'antd';
import React, { useState, useRef, useEffect } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import { ModalForm, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import UpdateForm from './components/UpdateForm';
import { getUserData } from './service';
/**
 * 添加节点
 * @param fields
 */
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const data = [
  {
    name: 'Ant Design Title 1',
    profession: ''
  },
];
const BasicList = () => {
  /**
   * 新建窗口的弹窗
   */
  const [createModalVisible, handleModalVisible] = useState(false);
  /**
   * 分布更新窗口的弹窗
   */

  const [userData, setUserData] = useState([]);
  const actionRef = useRef();
  /**
   * 国际化配置
   */

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
              description={item.profession}
            />
          </List.Item>
        )}
      />
    </PageContainer>
  );
};

export default BasicList;
