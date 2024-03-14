// This file is auto-generated. Do not modify manually.

type CookiesCodeRegisteryType =
  | 'authentication-form'
  | 'hero-section'
  | 'empty-state'
  | 'image-card'
  | 'toggle-list';
  
export const COOKIES_SETUP_CODE: Record<CookiesCodeRegisteryType, { registerAt: string; code: string }> = {
  "authentication-form": {
    "registerAt": "components/cookies/authentication-form.tsx",
    "code": "'use client';\nimport {\n  Card,\n  CardHeader,\n  CardHeaderDescription,\n  CardHeaderTitle,\n  CardContent,\n  CardFooter,\n} from '@/components/ui/card';\nimport { useState } from 'react';\nimport { Input } from '@/components/ui/input';\nimport { Button } from '@/components/ui/button';\n\nexport default function AuthenticationForm() {\n  const [view, setView] = useState<'login' | 'create-account'>('login');\n  return (\n    <Card className=\"authentication-form w-[420px]\">\n      <CardHeader>\n        <CardHeaderTitle>\n          {view === 'login' && 'Log In'}\n          {view === 'create-account' && 'Create new account'}\n        </CardHeaderTitle>\n        <CardHeaderDescription>\n          {view === 'login'\n            ? 'Do not have an account?'\n            : 'Already have an account?'}{' '}\n          <button\n            className=\"text-blue-500 hover:text-blue-600\"\n            onClick={() => {\n              setView(view === 'login' ? 'create-account' : 'login');\n            }}>\n            {view === 'login'\n              ? 'Create new account'\n              : 'Log into existing account'}\n          </button>\n        </CardHeaderDescription>\n      </CardHeader>\n      <CardContent className=\"grid grid-cols-1 gap-4\">\n        {view === 'login' && (\n          <>\n            <Input\n              withLabel=\"Email Address\"\n              labelDirection=\"v\"\n              placeholder=\"ironman@avengers.com\"\n              animationType=\"from-bottom\"\n              stretch\n            />\n            <Input\n              withLabel=\"Password\"\n              labelDirection=\"v\"\n              placeholder=\"**********\"\n              animationType=\"from-bottom\"\n              stretch\n            />\n          </>\n        )}\n        {view === 'create-account' && (\n          <>\n            <Input\n              withLabel=\"Create username\"\n              labelDirection=\"v\"\n              placeholder=\"@ironman\"\n              animationType=\"from-bottom\"\n              stretch\n            />\n            <Input\n              withLabel=\"Your Email Address\"\n              labelDirection=\"v\"\n              placeholder=\"ironman@avengers.com\"\n              animationType=\"from-bottom\"\n              stretch\n            />\n            <Input\n              withLabel=\"Create a Password\"\n              labelDirection=\"v\"\n              placeholder=\"**********\"\n              animationType=\"from-bottom\"\n              stretch\n            />\n          </>\n        )}\n      </CardContent>\n      <CardFooter>\n        <Button stretch withArrow={view === 'create-account'}>\n          {view === 'login' ? 'Log In' : 'Get Started'}\n        </Button>\n      </CardFooter>\n    </Card>\n  );\n}\n"
  },
  "hero-section": {
    "registerAt": "components/cookies/hero-section.tsx",
    "code": "'use client';\nimport { forwardRef } from 'react';\nimport { Button, ButtonProps } from '@/components/ui/button';\nimport { cn } from '@/helpers/utils';\n\nexport interface HeroSectionProps\n  extends React.HTMLAttributes<HTMLDivElement> {}\nexport interface HeroSectionHeadlineProps\n  extends React.HTMLAttributes<HTMLHeadingElement> {}\nexport interface HeroSectionDescriptionProps\n  extends React.HTMLAttributes<HTMLParagraphElement> {}\nexport interface HeroSectionCTAContainerProps\n  extends React.HTMLAttributes<HTMLDivElement> {}\nexport interface HeroSectionCTAPrimaryActionProps extends ButtonProps {}\nexport interface HeroSectionCTASecondaryActionProps extends ButtonProps {}\n\nexport const HeroSection = forwardRef<HTMLDivElement, HeroSectionProps>(\n  ({ className, ...args }, ref) => {\n    return (\n      <div ref={ref} className={cn('hero-section', className)} {...args} />\n    );\n  },\n);\n\nHeroSection.displayName = 'HeroSection';\n\nexport const HeroSectionHeadline = forwardRef<\n  HTMLHeadingElement,\n  HeroSectionHeadlineProps\n>(({ className, ...args }, ref) => {\n  return (\n    <h1\n      ref={ref}\n      className={cn(\n        'hero-section-headline text-4xl font-semibold tracking-tighter',\n        className,\n      )}\n      {...args}\n    />\n  );\n});\n\nHeroSectionHeadline.displayName = 'HeroSectionHeadline';\n\nexport const HeroSectionDescription = forwardRef<\n  HTMLParagraphElement,\n  HeroSectionDescriptionProps\n>(({ className, ...args }, ref) => {\n  return (\n    <p\n      ref={ref}\n      className={cn(\n        'hero-section-description text-neutral-500 leading-snug my-4',\n        className,\n      )}\n      {...args}\n    />\n  );\n});\n\nHeroSectionDescription.displayName = 'HeroSectionDescription';\n\nexport const HeroSectionCTAContainer = forwardRef<\n  HTMLDivElement,\n  HeroSectionCTAContainerProps\n>(({ className, ...args }, ref) => {\n  return (\n    <div\n      ref={ref}\n      className={cn(\n        'hero-section-cta-container flex flex-row items-center justify-start gap-4 mt-4',\n      )}\n      {...args}\n    />\n  );\n});\n\nHeroSectionCTAContainer.displayName = 'HeroSectionCTAContainer';\n\nexport const HeroSectionCTAPrimaryAction = forwardRef<\n  HTMLButtonElement,\n  HeroSectionCTAPrimaryActionProps\n>(({ className, ...args }, ref) => {\n  return (\n    <Button\n      ref={ref}\n      variant=\"primary\"\n      className={cn('hero-section-cta-primary-action', className)}\n      {...args}\n    />\n  );\n});\n\nHeroSectionCTAPrimaryAction.displayName = 'HeroSectionCTAPrimaryAction';\n\nexport const HeroSectionCTASecondaryAction = forwardRef<\n  HTMLButtonElement,\n  HeroSectionCTASecondaryActionProps\n>(({ className, ...args }, ref) => {\n  return (\n    <Button\n      ref={ref}\n      variant=\"ghost\"\n      className={cn('hero-section-cta-secondary-action')}\n      {...args}\n    />\n  );\n});\n\nHeroSectionCTASecondaryAction.displayName = 'HeroSectionCTASecondaryAction';\n"
  },
  "empty-state": {
    "registerAt": "components/cookies/empty-state.tsx",
    "code": "'use client';\nimport { forwardRef } from 'react';\nimport { Button, ButtonProps } from '@/components/ui/button';\nimport { cn } from '@/helpers/utils';\n\nexport interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {}\nexport interface EmptyStateIconProps\n  extends React.HTMLAttributes<HTMLDivElement> {}\nexport interface EmptyStateHeadlineProps\n  extends React.HTMLAttributes<HTMLHeadingElement> {}\nexport interface EmptyStateDescriptionProps\n  extends React.HTMLAttributes<HTMLParagraphElement> {}\nexport interface EmptyStatePrimaryActionProps extends ButtonProps {}\nexport interface EmptyStateSecondaryActionProps extends ButtonProps {}\n\nexport const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(\n  ({ className, children, ...args }, ref) => {\n    return (\n      <div\n        ref={ref}\n        className={cn(\n          'empty-state border-2 border-dashed border-neutral-800 p-6 rounded-xl',\n        )}\n        {...args}>\n        <div className=\"empty-state-content flex flex-col items-center gap-2 min-w-[460px]\">\n          {children}\n        </div>\n      </div>\n    );\n  },\n);\n\nEmptyState.displayName = 'EmptyState';\n\nexport const EmptyStateIcon = forwardRef<HTMLDivElement, EmptyStateIconProps>(\n  ({ className, ...args }, ref) => {\n    return (\n      <div\n        ref={ref}\n        className={cn(\n          'empty-state-icon w-[60px] h-[60px] [&>*]:w-full [&>*]:h-full text-neutral-600 mb-2',\n          className,\n        )}\n        {...args}\n      />\n    );\n  },\n);\n\nEmptyStateIcon.displayName = 'EmptyStateIcon';\n\nexport const EmptyStateHeadline = forwardRef<\n  HTMLHeadingElement,\n  EmptyStateHeadlineProps\n>(({ className, ...args }, ref) => {\n  return (\n    <h1\n      ref={ref}\n      className={cn(\n        'empty-state-headline font-semibold text-2xl text-neutral-300 leading-snug tracking-tight',\n        className,\n      )}\n      {...args}\n    />\n  );\n});\n\nEmptyStateHeadline.displayName = 'EmptyStateHeadline';\n\nexport const EmptyStateDescription = forwardRef<\n  HTMLParagraphElement,\n  EmptyStateDescriptionProps\n>(({ className, ...args }, ref) => {\n  return (\n    <p\n      ref={ref}\n      className={cn('empty-state-description text-neutral-500', className)}\n      {...args}\n    />\n  );\n});\n\nEmptyStateDescription.displayName = 'EmptyStateDescription';\n\nexport const EmptyStatePrimaryAction = forwardRef<\n  HTMLButtonElement,\n  EmptyStatePrimaryActionProps\n>(({ className, ...args }, ref) => {\n  return (\n    <Button\n      ref={ref}\n      variant=\"primary\"\n      className={cn('empty-state-primary-action mt-4', className)}\n      {...args}\n    />\n  );\n});\n\nEmptyStatePrimaryAction.displayName = 'EmptyStatePrimaryAction';\n\nexport const EmptyStateSecondaryAction = forwardRef<\n  HTMLButtonElement,\n  EmptyStateSecondaryActionProps\n>(({ className, ...args }, ref) => {\n  return (\n    <Button\n      ref={ref}\n      variant=\"ghost\"\n      size=\"sm\"\n      className={cn('empty-state-secondary-action mt-2', className)}\n      {...args}\n    />\n  );\n});\n\nEmptyStateSecondaryAction.displayName = 'EmptyStateSecondaryAction';\n"
  },
  "image-card": {
    "registerAt": "components/cookies/image-card.tsx",
    "code": "'use client';\nimport { cn } from '@/helpers/utils';\nimport React, { forwardRef } from 'react';\n\nconst DEFAULT_HEIGHT = '200px';\nconst DEFAULT_WIDTH = '300px';\n\nexport interface ImageCardProps extends React.HTMLAttributes<HTMLDivElement> {\n  width?: string;\n}\nexport interface ImageCardCoverProps\n  extends React.HTMLAttributes<HTMLDivElement> {\n  height?: string;\n}\nexport interface ImageCardHeadlineProps\n  extends React.HTMLAttributes<HTMLHeadingElement> {}\nexport interface ImageCardDescriptionProps\n  extends React.HTMLAttributes<HTMLParagraphElement> {}\n\nexport const ImageCard = forwardRef<HTMLDivElement, ImageCardProps>(\n  ({ className, style, width = DEFAULT_WIDTH, ...args }, ref) => {\n    return (\n      <div\n        ref={ref}\n        className={cn('image-card grid gap-2', className)}\n        style={{\n          ...style,\n          width,\n        }}\n        {...args}\n      />\n    );\n  },\n);\n\nImageCard.displayName = 'ImageCard';\n\nexport const ImageCardCover = forwardRef<HTMLDivElement, ImageCardCoverProps>(\n  ({ className, style, height = DEFAULT_HEIGHT, ...args }, ref) => {\n    return (\n      <div\n        ref={ref}\n        className={cn(\n          'image-card-cover overflow-hidden flex flex-row items-center justify-center rounded-xl shadow-lg',\n          className,\n        )}\n        id=\"image-card-cover\"\n        style={{\n          ...style,\n          height,\n        }}\n        {...args}\n      />\n    );\n  },\n);\n\nImageCardCover.displayName = 'ImageCardCover';\n\nexport const ImageCardHeadline = forwardRef<\n  HTMLHeadingElement,\n  ImageCardHeadlineProps\n>(({ className, ...args }, ref) => {\n  return (\n    <div\n      ref={ref}\n      className={cn(\n        'image-card-headline mt-2 leading-snug tracking-tighter font-medium text-xl',\n        className,\n      )}\n      {...args}\n    />\n  );\n});\n\nImageCardHeadline.displayName = 'ImageCardHeadline';\n\nexport const ImageCardDescription = forwardRef<\n  HTMLParagraphElement,\n  ImageCardDescriptionProps\n>(({ className, ...args }, ref) => {\n  return (\n    <p\n      ref={ref}\n      className={cn(\n        'image-card-description text-sm text-neutral-500',\n        className,\n      )}\n      {...args}\n    />\n  );\n});\n\nImageCardDescription.displayName = 'ImageCardDescription';\n"
  },
  "toggle-list": {
    "registerAt": "components/cookies/toggle-list.tsx",
    "code": "'use client';\nimport { forwardRef } from 'react';\nimport {\n  Accordion,\n  AccordionContent,\n  AccordionItem,\n  AccordionTrigger,\n} from '@/components/ui/accordion';\nimport { cn } from '@/helpers/utils';\nimport { Switch } from '@/components/ui/switch';\n\nexport const ToggleListContainer = Accordion;\nToggleListContainer.displayName = 'ToggleListContainer';\n\nexport const ToggleList = AccordionItem;\nToggleList.displayName = 'ToggleList';\n\nexport const ToggleListTrigger = AccordionTrigger;\nToggleListTrigger.displayName = 'ToggleListTrigger';\n\nexport const ToggleListContent = forwardRef<\n  React.ElementRef<typeof AccordionContent>,\n  React.ComponentPropsWithoutRef<typeof AccordionContent>\n>(({ className, ...args }, ref) => {\n  return (\n    <AccordionContent\n      ref={ref}\n      className={cn('toggle-list-content grid grid-cols-1 gap-4', className)}\n      {...args}\n    />\n  );\n});\nToggleListContent.displayName = 'ToggleListContent';\n\nexport interface ToggleListItemProps\n  extends React.HTMLAttributes<HTMLDivElement> {\n  isChecked?: boolean;\n}\n\nexport const ToggleListItem = forwardRef<HTMLDivElement, ToggleListItemProps>(\n  ({ className, children, isChecked = false, ...args }, ref) => {\n    return (\n      <div\n        ref={ref}\n        className={cn(\n          'toggle-list-item flex flex-row items-center justify-between gap-6',\n          className,\n        )}\n        {...args}>\n        <p className=\"toggle-list-item-value text-sm text-white truncate\">\n          {children}\n        </p>\n        <Switch isChecked={isChecked} />\n      </div>\n    );\n  },\n);\n\nToggleListItem.displayName = 'ToggleListItem';\n"
  }
};
