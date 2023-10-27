import { Button } from '../button';
import { filterDOMProps } from '@react-aria/utils';
import { FocusableRef } from '@react-types/shared';
import { Menu } from './Menu';
import { MenuTrigger } from './MenuTrigger';
import { ArrowIosDownwardOutline, Icon, MoreHorizontalOutline } from '../icon';
import React, { forwardRef } from 'react';
import { ActionMenuProps } from '../types';
import { css } from '@emotion/react';

function ActionMenu<T extends object>(
  props: ActionMenuProps<T>,
  ref: FocusableRef<HTMLButtonElement>
) {
  const {
    children,
    buttonText,
    buttonSize,
    buttonVariant = 'default',
    icon,
  } = props;
  const buttonProps = filterDOMProps(props, { labelable: true });
  if (buttonProps['aria-label'] === undefined) {
    buttonProps['aria-label'] = 'actions';
  }
  let buttonChildren;

  if (buttonText) {
    buttonChildren = (
      <span
        css={css`
          display: flex;
          align-items: center;
          .ac-icon-wrap {
            flex: fixed;
            padding-left: var(--ac-global-dimension-static-size-100);
            width: 16px;
            height: 16px;
            font-size: 16px;
            margin-right: -4px;
          }
        `}
      >
        {buttonText}
        <Icon svg={<ArrowIosDownwardOutline />} />
      </span>
    );
  }

  return (
    <MenuTrigger
      isOpen={props.isOpen}
      defaultOpen={props.defaultOpen}
      onOpenChange={props.onOpenChange}
      align={props.align}
      direction={props.direction}
      shouldFlip={props.shouldFlip}
    >
      <Button
        icon={icon ?? <Icon svg={<MoreHorizontalOutline />} />}
        ref={ref}
        {...buttonProps}
        children={buttonChildren}
        size={buttonSize}
        variant={buttonVariant}
        disabled={props.isDisabled}
      />
      <Menu
        children={children}
        items={props.items}
        disabledKeys={props.disabledKeys}
        onAction={props.onAction}
      />
    </MenuTrigger>
  );
}

/**
 * ActionMenu combines an ActionButton with a Menu for simple "more actions" use cases.
 */
const _ActionMenu = forwardRef(ActionMenu);
export { _ActionMenu as ActionMenu };
