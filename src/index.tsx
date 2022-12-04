import React, { useState } from "react";
import { render } from "react-dom";

import {
  Button,
  DesignSystemProvider,
  DropdownMenu,
  SegmentedControlButton,
  SegmentedControlGroup,
  Select,
} from "@databricks/design-system";
import "@databricks/design-system/dist/index.css";

export const DummyDom = ({ size }: { size: number }) => {
  return (
    <div style={{ maxHeight: 600, overflowY: "scroll", fontSize: 10 }}>
      <div>
        Displaying {size}x{size} = {size ** 2} DIV elements.
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
          gap: 8,
        }}
      >
        {new Array(size).fill("").map((_, i) => (
          <React.Fragment key={i}>
            {new Array(size).fill("").map((_, j) => (
              <div
                key={`${i}-${j}`}
                style={{ padding: 8, border: "1px solid black" }}
              >
                Element - {i} - {j}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const App = ({ getPopupContainer }: any) => {
  const [dummyDomSize, setDummyDomSize] = useState(20);
  const [isUsingModalMode, setUsingModalMode] = useState(true);
  return (
    <DesignSystemProvider getPopupContainer={getPopupContainer}>
      <div>
        <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
          <SegmentedControlGroup value={isUsingModalMode}>
            <SegmentedControlButton
              value={true}
              onClick={() => setUsingModalMode(true)}
            >
              Use modal mode
            </SegmentedControlButton>
            <SegmentedControlButton
              value={false}
              onClick={() => setUsingModalMode(false)}
            >
              Don't use modal mode
            </SegmentedControlButton>
          </SegmentedControlGroup>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            marginBottom: 16,
          }}
        >
          <Button onClick={() => setDummyDomSize(20)}>
            {20 ** 2} DOM elements
          </Button>
          <Button onClick={() => setDummyDomSize(40)}>
            {40 ** 2} DOM elements
          </Button>
          <Button onClick={() => setDummyDomSize(50)}>
            {50 ** 2} DOM elements
          </Button>
          <Button onClick={() => setDummyDomSize(80)}>
            {80 ** 2} DOM elements
          </Button>{" "}
          <Button onClick={() => setDummyDomSize(125)}>
            {125 ** 2} DOM elements
          </Button>
        </div>
        <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
          <DropdownMenu.Root modal={isUsingModalMode}>
            <DropdownMenu.Trigger asChild>
              <Button type="primary">Dropdown button</Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content align="start">
              <DropdownMenu.Item>Option 1</DropdownMenu.Item>
              <DropdownMenu.Item>Option 2</DropdownMenu.Item>
              <DropdownMenu.Item>Option 3</DropdownMenu.Item>
              <DropdownMenu.Item>Option 4</DropdownMenu.Item>
              <DropdownMenu.Item>Option 5</DropdownMenu.Item>
              <DropdownMenu.Item>Option 6</DropdownMenu.Item>
              <DropdownMenu.Item>Option 7</DropdownMenu.Item>
              <DropdownMenu.Item>Option 8</DropdownMenu.Item>
              <DropdownMenu.Item>Option 9</DropdownMenu.Item>
              <DropdownMenu.Item>Option 10</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
          <Select value={1}>
            <Select.Option value={1}>Option 1</Select.Option>
            <Select.Option value={2}>Option 2</Select.Option>
            <Select.Option value={3}>Option 3</Select.Option>
            <Select.Option value={4}>Option 4</Select.Option>
            <Select.Option value={5}>Option 5</Select.Option>
            <Select.Option value={6}>Option 6</Select.Option>
            <Select.Option value={7}>Option 7</Select.Option>
            <Select.Option value={8}>Option 8</Select.Option>
            <Select.Option value={9}>Option 9</Select.Option>
            <Select.Option value={10}>Option 10</Select.Option>
          </Select>
        </div>
      </div>
      <DummyDom size={dummyDomSize} />
    </DesignSystemProvider>
  );
};

render(<App getPopupContainer={undefined} />, document.getElementById("root"));
