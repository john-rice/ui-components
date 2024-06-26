import { FocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import React, { RefObject, useRef } from 'react';
import { SliderState } from '@react-stately/slider';
import { useHover } from '@react-aria/interactions';
import { useSliderThumb } from '@react-aria/slider';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { classNames } from '../utils';
import { AriaSliderThumbProps } from '../types/slider';
import { handleCSS } from './styles';

interface SliderThumbProps extends AriaSliderThumbProps {
  trackRef: RefObject<HTMLElement>;
  inputRef?: RefObject<HTMLInputElement>;
  state: SliderState;
}

export function SliderThumb(props: SliderThumbProps) {
  let { inputRef, state } = props;
  const backupRef = useRef<HTMLInputElement>(null);
  inputRef = inputRef || backupRef;

  const { thumbProps, inputProps, isDragging, isFocused } = useSliderThumb(
    {
      ...props,
      inputRef,
    },
    state
  );

  const { hoverProps, isHovered } = useHover({});

  return (
    <FocusRing within focusRingClass={'is-focused'}>
      <div
        className={classNames('ac-slider-handle', {
          'is-hovered': isHovered,
          'is-dragged': isDragging,
          'is-tophandle': isFocused,
        })}
        {...mergeProps(thumbProps, hoverProps)}
        role="presentation"
        css={handleCSS}
      >
        <VisuallyHidden>
          <input
            className={classNames('ac-slider-input')}
            ref={inputRef}
            {...inputProps}
          />
        </VisuallyHidden>
      </div>
    </FocusRing>
  );
}
