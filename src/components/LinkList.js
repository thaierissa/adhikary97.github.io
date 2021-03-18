import React from "react";
import { ListGroup, Card } from "react-bootstrap";
import LinkButton from "./LinkButton";
import { Icon } from "@iconify/react";
import circleError from "@iconify-icons/si-glyph/circle-error";
import windowCloseLine from "@iconify-icons/clarity/window-close-line";
import windowMaxLine from "@iconify-icons/clarity/window-max-line";
import windowMinLine from "@iconify-icons/clarity/window-min-line";

const LinkList = () => {
  const links = [
    "https://anchor.fm/uncaughtexceptions",
    "https://www.youtube.com/channel/UCXVGYwQXZ18CdlrMsBpQFsw?sub_confirmation=1",
    "https://www.tiktok.com/@uncaughtexceptions",
    "https://www.instagram.com/uncaughtexceptions",
  ];

  return (
    <Card className="text-white bg-dark mb-3 ">
      <Card.Header as="h2">
        <Icon icon={circleError} className="align-middle" color="red" /> Error!
        <span className="align-right float-right">
          <Icon icon={windowMinLine} className="align-middle" /> &nbsp;
          <Icon icon={windowMaxLine} className="align-middle" /> &nbsp;
          <Icon icon={windowCloseLine} className="align-middle" />
        </span>
      </Card.Header>
      <Card.Body className="bg-dark">
        <Card.Title className="mb-5">
          <div className="my-auto">
            <h2 className="red">Uncaught Exceptions!</h2>
            PODCAST
          </div>
        </Card.Title>
        <ListGroup>
          <div className="mx-lg-5 mr-3 ml-3 d-flex flex-column align-items-center mb-4">
            {links.map((link) => (
              <LinkButton key={link} link={link} />
            ))}
          </div>
        </ListGroup>
        <center>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=PLM1nnxhwhCzQpYhFq6BxJlkfmsZASUYCF"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title="Most Recent YouTube Video"
            />
          </div>
        </center>
      </Card.Body>
    </Card>
  );
};

export default LinkList;
