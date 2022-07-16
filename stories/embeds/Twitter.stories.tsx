import { ComponentMeta, ComponentStory } from "@storybook/react";
import { EXTENSIONS, Editor } from "../../src/Editor";

import React from "react";
import { TweetComponent } from "../../src/plugins/Twitter/Components";
import { getContentChangeHandler } from "../utilities/OutputInspectorAddon/src/OutputInspector";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Embeds/Twitter",
  component: TweetComponent,
  decorators: [
    (Story, ctx) => {
      const onContentChangeHandler = React.useCallback(
        getContentChangeHandler(EXTENSIONS),
        []
      );
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
                onContentChange: onContentChangeHandler,
              }}
            />
          </div>
        </div>
      );
    },
  ],
} as ComponentMeta<typeof Editor>;

const Template: ComponentStory<typeof Editor> = (args) => <Editor {...args} />;

export const Editable = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Editable.args = {
  editable: true,
  initialContent: `<div data-type="tweet"></div>`,
};