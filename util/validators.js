module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword
) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "Nazwa użytkownika nie może być pusta.";
  }
  if (email.trim() === "") {
    errors.email = "Email nie może byc pusty.";
  } else {
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,9}$/;
    if (!email.match(regEx)) {
      errors.email = "Podaj prawidłowy email.";
    }
  }
  if (password === "") {
    errors.password = "Hasło nie może być puste.";
  } else if (password != confirmPassword) {
    errors.confirmPassword = "Hasła muszą się zgadzać.";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports.validateLoginInput = (username, password) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "Nazwa użytkownika nie może być pusta.";
  }
  if (password.trim() === "") {
    errors.password = "Hasło nie może być puste.";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
