import { Flex, RadioGroup, Text } from '@radix-ui/themes';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  Colors,
  getInitialSettingsValue,
  setBackgroundColor,
} from '../redux/settingsSlice';

export const Settings: React.FC = () => {
  // jak usune to wyzej to bedzie podkreslalo na zolto
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const color = useAppSelector(getInitialSettingsValue);
  const dispatch = useAppDispatch();
  // radix pozwala na onValueChange - value jest z eventu
  const handleRadio = (value: Colors) => {
    dispatch(setBackgroundColor(value));
  };

  console.log('color', color);

  return (
    <div>
      <h2>Settings</h2>
      <p>Select card color</p>

      <RadioGroup.Root defaultValue={color} onValueChange={handleRadio}>
        <Flex gap="2" direction="column">
          <Text as="label" size="2">
            <Flex gap="2">
              <RadioGroup.Item value="light" /> Light
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2">
              <RadioGroup.Item value="dark" /> Dark
            </Flex>
          </Text>
        </Flex>
      </RadioGroup.Root>
    </div>
  );
};
