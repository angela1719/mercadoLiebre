const controlador = {
    home: (req, res) => {
        res.sendfile('views/home.html');
    },
    login: (req, res) => {
        res.sendfile('views/login.html');
    },
    register: (req, res) => {
        res.sendfile('views/register.html');
    },
}

module.exports = controlador;