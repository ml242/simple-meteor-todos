// server/smtp.js
Meteor.startup(function () {
  smtp = {
    username: ENV['gmail_un'],   // eg: server@gentlenode.com
    password: ENV['gmail_pw'],   // eg: 3eeP1gtizk5eziohfervU
    server:   'smtp.gmail.com',  // eg: mail.gandi.net
    port: 25
  }

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});