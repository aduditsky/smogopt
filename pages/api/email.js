import TelegramBot from 'node-telegram-bot-api';

export default async function (req, res) {
  //console.log(req.body);

  let nodemailer = require('nodemailer');
  let clientTemplate = require('./client.js');
  let botToken = '1804436470:AAGbAuaIJOIdioVNB9zuJyDZrU-tM4KrMQ0';
  let chatId = `-578178927`;

  const notification = nodemailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'notification@smogopt.ru',
      pass: '1F63oTnD',
    },
  });

  const noReply = nodemailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'no-reply@smogopt.ru',
      pass: '1F63oTnD',
    },
  });

  //Уведомление для админов
  try {
    await notification.sendMail({
      from: 'notification@smogopt.ru',
      to: 'smogopt@gmail.com',
      subject: `Новая заявка от ${req.body.name}`,
      text: req.body.message,
      html: `<div>
        <h1>Новая заявка!</h1>
        <h2>Вид заявки: ${req.body.select}</h2>
        <h2>Город: ${req.body.city}</h2>
        <p>Имя: ${req.body.name}</p>
        <p>Email: ${req.body.email}</p>
        <p>Телефон: ${req.body.tel}</p>
        ${
          req.body.message !== ''
            ? `<p>Сообщение: ${req.body.message}</p>`
            : `<p>Сообщения нет</p>`
        }
        </div>`,
    });

    console.log(`Новый клиент - ${req.body.name}`);
  } catch (err) {
    console.log(err);
  }

  const bot = new TelegramBot(botToken);

  // await bot.startPolling();

  const telegramMessage = `
  <b>Новая заявка!</b>\n<b>Вид заявки: ${req.body.select}</b>\n<b>Город: ${
    req.body.city
  } </b>\nИмя: ${req.body.name}\nEmail: ${req.body.email}\nТелефон: ${
    req.body.tel
  } ${
    req.body.message !== ''
      ? `\n\nСообщение: ${req.body.message}`
      : `\n\nСообщения нет`
  }
  `;

  try {
    bot.sendMessage(chatId, telegramMessage, { parse_mode: 'HTML' });
    console.log(`Сообщение в телеграм отправлено! (Клиент: ${req.body.name})`);
  } catch (error) {
    console.log(error);
  }

  // await bot.stopPolling();

  //Уведомление для покупателей
  try {
    await noReply.sendMail({
      from: 'no-reply@smogopt.ru',
      to: req.body.email,
      subject: `Спасибо за заявку на сайте SmogOpt.ru`,
      text: 'Оптовый прайс - Уведомление',
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
      <html lang="ru">
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      
          <title>Спасибо за заявку на SmogOpt.ru</title>
      
          <style type="text/css">
            /* Outlines the grids, remove when sending */
            /* table td {
              border: 1px solid cyan;
            } */
      
            /* CLIENT-SPECIFIC STYLES */
            body,
            table,
            td,
            a {
              -webkit-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
            }
            table,
            td {
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
            }
            img {
              -ms-interpolation-mode: bicubic;
            }
      
            .teg-link {
              padding: 8px 16px;
              background-color: #43d854;
              color: #fff;
              text-decoration: none;
            }

            .jJbRQk {
              color: #fff;
              margin-top: 7.5px;
              margin-bottom: 7.5px;
            }
      
            /* RESET STYLES */
            img {
              border: 0;
              outline: none;
              text-decoration: none;
            }
            table {
              border-collapse: collapse !important;
            }
            body {
              margin: 0 !important;
              padding: 0 !important;
              width: 100% !important;
            }
      
            /* iOS BLUE LINKS */
            a[x-apple-data-detectors] {
              color: inherit !important;
              text-decoration: none !important;
              font-size: inherit !important;
              font-family: inherit !important;
              font-weight: inherit !important;
              line-height: inherit !important;
            }
      
            /* ANDROID CENTER FIX */
            div[style*='margin: 16px 0;'] {
              margin: 0 !important;
            }
      
            /* MEDIA QUERIES */
            @media all and (max-width: 639px) {
              .wrapper {
                width: 320px !important;
                padding: 0 !important;
              }
              .container {
                width: 300px !important;
                padding: 0 !important;
              }
              .mobile {
                width: 300px !important;
                display: block !important;
                padding: 0 !important;
              }
              .img {
                width: 100% !important;
                height: auto !important;
              }
              *[class='mobileOff'] {
                width: 0px !important;
                display: none !important;
              }
              *[class*='mobileOn'] {
                display: block !important;
                max-height: none !important;
              }
            }
          </style>
        </head>
        <body style="margin: 0; padding: 0; background-color: white">
          <span
            style="
              display: block;
              width: 640px !important;
              max-width: 640px;
              height: 1px;
            "
            class="mobileOff"
          ></span>
      
          <center>
            <table
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              bgcolor="white"
            >
              <tr>
                <td align="center" valign="top">
                  <table
                    width="640"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    class="wrapper"
                    bgcolor="#FFFFFF"
                  >
                    <tr>
                      <td height="10" style="font-size: 10px; line-height: 10px">
                        &nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td align="center" valign="top">
                        <table
                          width="600"
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          class="container"
                        >
                          <tr>
                            <td align="center" valign="top">
                              <h1>Спасибо за заявку, ${req.body.name}</h1>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>
                                В ближайшее время с Вами свяжется менеджер, что бы
                                уточнить подробности заказа
                              </p>
                              <p>
                                Также у нас есть WhatsApp, где вы можете узнать
                                все цены и получить ответы на вопросы
                              </p>
                              <p>
                                <a
                                  class="teg-link"
                                  href="https://wa.me/message/RUMZJ4GRSJD3D1"
                                  ><img
                                    height="14"
                                    src="https://www.smogopt.ru/icons/whatsapp.svg"
                                    alt="Иконка WhatsApp"
                                  />
                                  Написать нам
                                </a>
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td height="10" style="font-size: 10px; line-height: 10px">
                        &nbsp;
                      </td>
                    </tr>
                  </table>
      
                  <table
                    width="640"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    class="wrapper"
                    bgcolor="#000"
                  >
                    <tr>
                      <td height="10" style="font-size: 10px; line-height: 10px">
                        &nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td align="center" valign="top">
                        <table
                          width="600"
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          class="container"
                        >
                          <tr>
                            <td align="center" valign="center">
                              <a href="tel:+79504206633" class="jJbRQk">+7 (950) 420-66-33</a>
                            </td>
                            <td align="center" valign="center">
                              <img
                                src="https://www.smogopt.ru/images/logo.png"
                                width="75px"
                                alt="Логотип"
                              />
                            </td>
                            <td align="center" valign="center">
                              <!-- <p style="color: #fff">Смог Опт</p> -->
                              <a href="https://vk.com/smogopt"
                                ><img
                                  height="32"
                                  src="https://www.smogopt.ru/icons/vk.svg"
                                  alt="vk лого"
                              /></a>
                              <a href="https://www.instagram.com/smogopt"
                                ><img
                                  height="32"
                                  src="https://www.smogopt.ru/icons/instagram.svg"
                                  alt="instagram лого"
                              /></a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td height="10" style="font-size: 10px; line-height: 10px">
                        &nbsp;
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </center>
        </body>
      </html>           
      `,
    });

    console.log(`Сообщение пользователю ${req.body.name} отправлено`);
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
}
