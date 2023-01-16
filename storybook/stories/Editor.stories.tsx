import { ComponentMeta, ComponentStoryFn } from "@storybook/react";
import { EXTENSIONS, Editor } from "../../src/editor";

import React from "react";
import { withContentChangeHandler } from "@bobaboard/tiptap-storybook-inspector";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Editor",
  component: Editor,
  decorators: [
    withContentChangeHandler(EXTENSIONS),
    (Story, ctx) => {
      return (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              maxWidth: "500px",
              backgroundColor: "antiquewhite",
            }}
          >
            <Story
              args={{
                ...ctx.args,
              }}
            />
          </div>
        </div>
      );
    },
  ],
} as ComponentMeta<typeof Editor>;

const Template: ComponentStoryFn<typeof Editor> = (args) => (
  <Editor {...args} />
);

export const Editable = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Editable.args = {
  editable: true,
  initialContent: `<picture data-type="image"><img src="https://placekitten.com/200/300" /></picture>`,
};

export const ViewOnly = Template.bind({});
ViewOnly.args = {
  ...Editable.args,
  editable: false,
};
