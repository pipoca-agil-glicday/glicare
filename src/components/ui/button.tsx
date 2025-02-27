// src/components/ui/Button.tsx
import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ButtonProps {
  children: string;
  isLoading?: boolean;
  icon: keyof typeof Ionicons.glyphMap;
}

export default function Button({ children, isLoading = false, icon, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      {...rest}
      className="flex-row items-center justify-center p-3 bg-blue rounded-[100px] w-[21rem] h-12 disabled:opacity-50"
      disabled={isLoading}
      activeOpacity={0.8}
    >
      {isLoading ? (
        <ActivityIndicator className="text-white" />
      ) : (
        <>
          <Ionicons name={icon} size={20} className="text-white mr-2" />
          <Text className="text-white text-lg font-semibold">{children}</Text>
        </>
      )}
    </TouchableOpacity>
  );
}