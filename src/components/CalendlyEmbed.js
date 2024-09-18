"use client";

import Card from "@/components/Card";
import SectionHeading from "@/components/SectionHeading";
import React from "react";
import { InlineWidget } from "react-calendly";

const Call = () => {
  return (
    <div id="calendly">
      <SectionHeading title="Schedule a Call" />
      <Card>
        <InlineWidget
          url="https://calendly.com/jason-malabutecpa/30min"
          styles={{ height: "700px" }}
        />
      </Card>
    </div>
  );
};

export default Call;
