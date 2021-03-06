import React from 'react'

import { Typography,Row, Col, List, Card, Tag, Divider } from 'antd';
import { useHideMenu } from '../hooks/useHideMenu';

const { Title, Text } = Typography;
const data = [
  {
      ticketNo: 33,
      escritorio: 3,
      agente: 'Fernando Herrera'
  },
  {
      ticketNo: 34,
      escritorio: 4,
      agente: 'Melissa Flores'
  },
  {
      ticketNo: 35,
      escritorio: 5,
      agente: 'Carlos Castro'
  },
  {
      ticketNo: 36,
      escritorio: 3,
      agente: 'Fernando Herrera'
  },
  {
      ticketNo: 37,
      escritorio: 3,
      agente: 'Fernando Herrera'
  },
  {
      ticketNo: 38,
      escritorio: 2,
      agente: 'Melissa Flores'
  },
  {
      ticketNo: 39,
      escritorio: 5,
      agente: 'Carlos Castro'
  },
];

export const Cola = () => {

  useHideMenu(true);
  return (
    <>

    <Title level={1}>Atendiendo al cliente</Title>
    <Row>
      <Col span={12}>
        <List
          dataSource={data.slice(0, 3)}
          renderItem={item => (
            <List.Item>
             {/*  <Text type="secondary">
                Ticket No. {item.ticketNo}
              </Text>
              <br />
              <Text type="secondary">
                Escritorio No. {item.escritorio}
              </Text>
              <br />
              <Text type="secondary">
                Atendido por {item.agente}
              </Text> */}
              <Card
                style={{width:300, marginTop:26}}
                actions={[
                  <Tag
                    color="volcano"
                  >{item.agente}
                  </Tag>,
                  <Tag
                  color="magenta"
                >Escritorio: {item.escritorio}
                </Tag>
                ]}
              >
                <Title>
                  No. {item.ticketNo}
                </Title>
              </Card>
            </List.Item>
          )}
        />
      </Col>

      <Col span={12}>

        <Divider>Historial</Divider>
        <List
          dataSource={data.slice(3)}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={`Ticket No. ${item.ticketNo}`}
                description={
                  <>
                    <Text type="secondary">
                     En el escritorio: </Text>
                    <Tag color="volcano">{item.escritorio}</Tag>

                    <Text type="secondary">
                     Agente: </Text>
                    <Tag color="magenta">{item.agente}</Tag>
                  </>
                }
              />

              
            </List.Item>
          )}
        />

      </Col>
    </Row>
    
    </>
  )
}
