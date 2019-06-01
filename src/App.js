import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactPlayer from "react-player";
import { Layout, Card, Row, Col, Button, notification, Carousel } from "antd";

const { Meta } = Card;

const VideoCard = props => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <ReactPlayer
          url={props.url}
          className="react-player"
          playing={false}
          width="100%"
          height="100%"
        />
      }
    >
      <Meta title={props.title} description={props.description} />
      <Button
        type="primary"
        shape="circle"
        icon="like"
        onClick={() => openNotification(props.title)}
      />
    </Card>
  );
};

const openNotification = title => {
  notification.open({
    message: "Notification Title",
    description: `Yasu liked ${title}`
  });
};

const videos = [
  { title: "Video 1", url: "https://www.youtube.com/watch?v=yakwUECPLwE" },
  { title: "Video 2", url: "https://www.youtube.com/watch?v=vYkfs6_So_4" },
  { title: "Video 3", url: "https://www.youtube.com/watch?v=rnwlWn603g4" },
  { title: "Video 4", url: "https://www.youtube.com/watch?v=rnwlWn603g4" },
  { title: "Video 5", url: "https://www.youtube.com/watch?v=rnwlWn603g4" },
  { title: "Video 6", url: "https://www.youtube.com/watch?v=rnwlWn603g4" },
  { title: "Video 1", url: "https://www.youtube.com/watch?v=yakwUECPLwE" },
  { title: "Video 7", url: "https://www.youtube.com/watch?v=vYkfs6_So_4" },
  { title: "Video 1", url: "https://www.youtube.com/watch?v=yakwUECPLwE" }
];

const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Header style={{ color: "white" }}>Goodvic</Header>
          <Content>
            <Row>
              {videos.map(video => (
                <Col md={4}>
                  <VideoCard title={video.title} url={video.url} />
                </Col>
              ))}
            </Row>
          </Content>
          <Footer>Goodvic 2018</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
