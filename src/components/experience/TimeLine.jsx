import React from "react";
import "./timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import events from "./event.json";
import ZingbusIcon from "../../img/zingbus.png";
const Zingbus = () => {
  return (
    <img
      style={{
        width: "50%",
        height: "50%",
      }}
      src={ZingbusIcon}
      alt="zingbus"
    />
  );
};
const TimeLine = () => {
  return (
    <>
      <div className="timelineContainer" id="Experience">
        <h1 className="timelineTitle">Experience</h1>

        <div style={{ background: "#334jjk" }}>
          <VerticalTimeline>
            {events.map((event) => (
              <VerticalTimelineElement
                lineColor="red"
                className="vertical-timeline-element--work"
                contentStyle={{ border: "0.5px solid #05a081", color: "black" }}
                contentArrowStyle={{
                  borderRight: "7px solid  #05a081",
                }}
                date={event.date}
                iconStyle={{
                  color: "#fff",
                  background: "#05a081",
                }}
              >
                <h3
                  className="vertical-timeline-element-title"
                  dangerouslySetInnerHTML={{ __html: event.event }}
                />
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default TimeLine;
