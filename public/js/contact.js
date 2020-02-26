$(document).ready(function () {
    $('#whatsapp').attr('href',Contact.whastappLink + Contact.getPhone());
});

Contact = {
    whastappLink: 'https://api.whatsapp.com/send?1=pt_BR&phone=',
    telesales: [
        '5521994589428',
        '5522992125404',
        '5521994679085',
        '5521994621679'
    ],
    getRandomIntInclusive: function (min , max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getPhone: function () {
        return Contact.telesales[Contact.getRandomIntInclusive(0,3)];
    }
};