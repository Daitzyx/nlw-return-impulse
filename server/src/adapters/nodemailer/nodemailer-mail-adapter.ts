import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9f3faca550845c",
    pass: "9947132afe715d"
  }
});

export class NodemailMailAdapter implements MailAdapter {
  async sendMail({subject, body}:SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feeget<oi@fidget.com>',
      to: 'Nathan Teixeira <nathandaitx@gmail.com',
      subject,
      html: body
  })
  }
}
