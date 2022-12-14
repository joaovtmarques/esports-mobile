import { ColorValue, Text, View } from 'react-native';

import { THEME } from '../../theme';
import { styles } from './styles';

interface Props {
  label: string;
  value: string;
  colorValue?: ColorValue;
}

export function DuoInfo({label, value, colorValue}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text
        style={[styles.value, {color: colorValue || THEME.COLORS.TEXT}]}
        numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
}
