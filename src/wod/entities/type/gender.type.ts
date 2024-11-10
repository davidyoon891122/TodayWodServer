export const GenderType = {
  man: 'M',
  woman: 'W',
} as const;

export type Gender = 'man' | 'woman';

export type GenderTypeKeys = (typeof GenderType)[keyof typeof GenderType];
