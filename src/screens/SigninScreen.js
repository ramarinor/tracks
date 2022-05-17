import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import AuthForm from '../ components/AuthForm';
import { Context as AuthContext } from '../context/authContext';
import NavLink from '../ components/NavLink';
const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign In to your account"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={signin}
      />

      <NavLink
        routeName="Signup"
        text="Don't have an account? Sign un instead!"
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200
  }
});

export default SigninScreen;
