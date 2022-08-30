import React, { CSSProperties, ReactNode, useState } from 'react';
import { css } from '@emotion/core';
import { Text } from '../content';
import { CollapsibleCardTitle } from './CollapsibleCardTitle';
import theme from '../theme';
import { cardCSS, headerCSS, collapsibleCardCSS } from './styles';
import { classNames } from '../utils';
import { useId } from '@react-aria/utils';

const headerTitleWrapCSS = css`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  & > h3,
  & > h4 {
    padding: 0;
    margin: 0;
  }
`;

const titleWithTitleExtraCSS = css`
  display: flex;
  flex-direction: row;
`;

const bodyCSS = css`
  flex: 1 1 auto;
  padding: ${theme.spacing.padding16}px;
`;

export type CardProps = {
  title?: string;
  subTitle?: string;
  children: ReactNode;
  style?: CSSProperties;
  bodyStyle?: CSSProperties;
  extra?: ReactNode; // Extra controls on the header
  className?: string;
  titleExtra?: ReactNode;
  collapsible?: boolean;
  defaultOpen?: boolean;
  onToggle?: (open: boolean) => void;
  id?: string;
};

export function Card({
  title,
  subTitle,
  children,
  style,
  bodyStyle,
  extra,
  className,
  titleExtra,
  collapsible = false,
  defaultOpen = true,
  id,
}: CardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const idPrefix = useId(id);
  const contentId = `${idPrefix}-content`,
    headerId = `${idPrefix}-heading`;
  const defaultTitle = (
    <Text textSize="xlarge" elementType="h3" weight="heavy">
      {title}
    </Text>
  );
  const titleEl =
    titleExtra != null ? (
      <div css={titleWithTitleExtraCSS}>
        {defaultTitle}
        {titleExtra}
      </div>
    ) : (
      defaultTitle
    );
  const subTitleEl =
    subTitle != null ? (
      <Text textSize="medium" elementType="h4" color="white70">
        {subTitle}
      </Text>
    ) : (
      undefined
    );
  const titleComponent = collapsible ? (
    <div css={headerTitleWrapCSS}>
      <CollapsibleCardTitle
        isOpen={isOpen}
        onOpen={() => setIsOpen(!isOpen)}
        title={titleEl}
        contentId={contentId}
        headerId={headerId}
        className="ac-card-collapsible-header"
        subTitle={subTitleEl}
      />
    </div>
  ) : (
    <div css={headerTitleWrapCSS}>
      {titleEl}
      {subTitleEl}
    </div>
  );
  return (
    <section
      css={collapsible ? collapsibleCardCSS : cardCSS}
      style={style}
      className={classNames('ac-card', className, {
        'is-open': isOpen,
      })}
    >
      <header css={headerCSS({ bordered: true, collapsible })} id={headerId}>
        {titleComponent}
        {extra}
      </header>
      <div
        css={css(
          bodyCSS,
          css`
            ${!isOpen && `display: none;`}
          `
        )}
        style={bodyStyle}
        id={contentId}
        aria-labelledby={headerId}
        aria-hidden={!isOpen}
      >
        {children}
      </div>
    </section>
  );
}
