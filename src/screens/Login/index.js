import React from 'react';
import {TouchableWithoutFeedback, View, ScrollView} from 'react-native';
import {Layout, Input, Button, Icon} from '@ui-kitten/components';

import useAuthStore from '../../stores/auth';

const LAYOUT = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: '5%',
};

const SCROLLVIEW = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
};

const SPACE = {
  margin: '3%',
};

const BUTTON = {
  marginTop: '10%',
  paddingHorizontal: '15%',
};

function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const {login} = useAuthStore();

  const passwordRef = React.useRef();

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  return (
    <Layout style={LAYOUT}>
      <ScrollView contentContainerStyle={SCROLLVIEW}>
        <Input
          label="digite seu usuário"
          placeholder="joao_silva"
          value={username}
          onChangeText={(nextValue) => setUsername(nextValue)}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <View style={SPACE} />
        <Input
          ref={passwordRef}
          value={password}
          label="digite sua senha"
          placeholder="senha123"
          accessoryRight={renderIcon}
          secureTextEntry={secureTextEntry}
          onChangeText={(nextValue) => setPassword(nextValue)}
        />
        <Button
          style={BUTTON}
          onPress={login}
          disabled={!username || !password}>
          entrar
        </Button>
      </ScrollView>
    </Layout>
  );
}

export {Login};
