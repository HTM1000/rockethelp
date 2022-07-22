import React from 'react';
import { Text, Button, IButtonProps, useTheme } from 'native-base';

interface Props extends IButtonProps {
  title: string;
  isActivite?: boolean;
  type: 'open' | 'closed';
}

export function Filter({ title, isActivite = false, type, ...rest }: Props) {
  const { colors } = useTheme();
  const colorType = type === 'open' ? colors.secondary[700] : colors.green[300];

  return (
    <Button
      variant="outline"
      borderWidth={isActivite ? 1 : 0}
      borderColor={colorType}
      bgColor="gray.600"
      flex={1}
      size="sm"
      {...rest}
    >
      <Text color={ isActivite ? colorType : 'gray.300'} fontSize="xs" textTransform="uppercase"> 
        {title} 
      </Text>
    </Button>
  );
}