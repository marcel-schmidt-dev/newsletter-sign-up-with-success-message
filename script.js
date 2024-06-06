const validation = new JustValidate('#form');
const form = document.getElementById('form');
const container = document.querySelector('.container');
const dismissbtn = document.querySelector('.success button');
const success = document.querySelector('.success');

validation.addField('#email', [
    {
        rule: 'required',
        errorMessage: 'valid email is required',
    },
    {
        rule: 'email',
        errorMessage: 'email is invalid!',
    },
]);

const handleSubmit = (e) => {
    e.preventDefault(e);
    if (validation.isValid) {
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        const mail = success.querySelector('p span');
        mail.innerHTML = data.email
        container.style.display = 'none';
        success.style.display = 'block';

    }
};

const handleDismiss = () => {
    container.style.display = 'flex';
    success.style.display = 'none';
}

form.addEventListener('submit', handleSubmit);
dismissbtn.addEventListener('click', handleDismiss)