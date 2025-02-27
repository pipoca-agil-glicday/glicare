import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ButtonProps {
  children: string;
  isLoading?: boolean;
  icon: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
}

export default function Button({ children, isLoading = false, icon, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
    className="flex-row items-center justify-center p-3 bg-blue rounded-[100px] w-[22rem] gap-2 h-12 disabled:opacity-50"
    disabled={isLoading}
    activeOpacity={0.8}
    onPress={rest.onPress}
    {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color="white"/>
      ) : (
        <>
          <Ionicons name={icon} size={22} color="white" />
          <Text className="text-white text-lg font-semibold">{children}</Text>
        </>
      )}
    </TouchableOpacity>
  );
}
