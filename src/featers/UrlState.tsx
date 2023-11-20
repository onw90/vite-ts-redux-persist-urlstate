import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Flex, Text, RadioGroup, TextField, Card } from '@radix-ui/themes';
import { useSearchParams } from 'react-router-dom';

export const UrlState = () => {
  const [URLSearchParams, SetURLSearchParams] = useSearchParams();
  const fruits = URLSearchParams.get('fruits') || 'apples';
  console.log('fruits2', fruits);

  const handleRadio = (value: 'apples' | 'oranges') => {
    URLSearchParams.set('fruits', value);
    SetURLSearchParams(URLSearchParams);
  };

  const searchItem = URLSearchParams.get('search') || '';
  const handleTextField = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    URLSearchParams.set('search', value);
    SetURLSearchParams(URLSearchParams);
  };

  return (
    <div>
      <h2>Url State</h2>
      <Card>
        <RadioGroup.Root defaultValue={fruits} onValueChange={handleRadio}>
          <Flex gap="2" direction="column">
            <Text as="label" size="2">
              <Flex gap="2">
                <RadioGroup.Item value="apples" /> Apples
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2">
                <RadioGroup.Item value="oranges" /> Oranges
              </Flex>
            </Text>
          </Flex>
        </RadioGroup.Root>
      </Card>

      <Card>
        <TextField.Root>
          <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
          <TextField.Input
            value={searchItem}
            onChange={handleTextField}
            placeholder="Search the docs…"
          />
        </TextField.Root>
      </Card>
    </div>
  );
};
