const validation = new JustValidate('#form');

validation
    .addField('#email', [
        {
            rule: 'required',
            errorMessage: 'valid email is required',
        },
        {
            rule: 'email',
            errorMessage: 'email is invalid!',
        },
    ]);