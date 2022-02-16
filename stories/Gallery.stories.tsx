import React from 'react';
import { css } from '@emotion/core';
import { Meta, Story } from '@storybook/react';
import { Alert, Card, useNotification, Button } from '../src';

// @ts-ignore
import chartFile from './images/chart.png';

const meta: Meta = {
  title: 'Gallery',
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/5mMInYH9JdJY389s8iBVQm/Component-Library?node-id=1398%3A4061',
    },
  },
};

export default meta;

const Template: Story = args => {
  const [notify, holder] = useNotification();
  return (
    <div>
      <Card
        title="Prediction Volume"
        bodyStyle={{ padding: 0 }}
        extra={
          <Button
            variant="default"
            onClick={() => {
              notify({
                variant: 'success',
                title: 'Awesome!',
                message: 'Things worked as expected',
                action: {
                  text: 'Try This',
                  onClick: () => {},
                },
              });
            }}
          >
            Notify
          </Button>
        }
      >
        <div
          css={css`
            position: relative;
            .ac-alert {
              position: absolute;
              left: 0;
              right: 0;
            }
          `}
        >
          <Alert variant="info" banner title="Heads up">
            Your predictions may be delayed by up to 10 minutes
          </Alert>

          <img
            src={chartFile}
            alt="chart image"
            css={css`
              margin: 24px;
            `}
          />
        </div>
      </Card>
      {holder}
    </div>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});