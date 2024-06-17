import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { KITTY1, KITTY2 } from "../constants/home";

interface TimelineElementProps {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  iconStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  contentArrowStyle?: React.CSSProperties;
}

const TimelineElement: React.FC<TimelineElementProps> = ({
  date,
  title,
  subtitle,
  description,
  imageUrl,
  iconStyle,
  contentStyle,
  contentArrowStyle,
}) => (
  <VerticalTimelineElement
    date={date}
    icon={
      <img
        src={imageUrl}
        alt={title}
        style={{ width: "100%", height: "100%", borderRadius: "50%" }}
      />
    }
    iconStyle={iconStyle}
    contentStyle={{
      ...contentStyle,
      background: "transparent",
      boxShadow: "none",
      height: "350px",
      color: "white",
      fontSize: "40px",
      fontFamily: "Comic Neue",
      fontWeight: 600
    }}
    contentArrowStyle={contentArrowStyle}
  >
    <h3 className="vertical-timeline-element-title">{title}</h3>
    <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
    <p>{description}</p>
  </VerticalTimelineElement>
);

const Timeline: React.FC = () => (
  <VerticalTimeline>
    <TimelineElement
      date=""
      title="Phase 1:"
      subtitle=" Straight Sending It 🚀"
      description="Launch $KITTY on Solana, grow the community, and secure exchange listings."
      imageUrl={KITTY2}
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
    />
    <TimelineElement
      date=""
      title="Phase 2:"
      subtitle="Going Higher 📈"
      description="Expand to more exchanges, boost rewards, and partner with influencers."
      imageUrl={KITTY2}
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
    />
    <TimelineElement
      date=""
      title="Phase 3:"
      subtitle=" Omega Pamp 💥"
      description="Major promotions, fun events, and strategic partnerships."
      imageUrl={KITTY2}
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
    />
    <TimelineElement
      date=""
      title="Phase 4:"
      subtitle=" Never-Ending Pamp 2025 🚀✨"
      description="$KITTY becomes a top meme coin with global recognition and information."
      imageUrl={KITTY2}
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
    />
    <TimelineElement
      date=""
      title="Phase 5:"
      subtitle=" 2025 Kitty Took Over 🔥🌍"
      description="$KITTY becomes a top meme coin with global recognition and innovation."
      imageUrl={KITTY2}
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
    />
    {/* Add more TimelineElement here */}
  </VerticalTimeline>
);

export default Timeline;