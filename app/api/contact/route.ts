import {NextRequest, NextResponse} from 'next/server'
import nodemailer from 'nodemailer'

const sendEmail = async ({
  name,
  email,
  message,
}: {
  name: string
  email: string
  message: string
}) => {
  const transporter = nodemailer.createTransport({
    port: Number(process.env.SMTP_PORT),
    host: process.env.SMTP_HOST,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    secure: true,
    debug: true,
    logger: true,
  })

  try {
    await transporter.verify()
  } catch (e) {
    console.error('Could not connect to host', e)

    return
  }

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.EMAIL_TO,
      subject: `Contact form message from ${name} ${email}`,
      text: message,
    })

    return transporter
  } catch (e) {
    console.error('Could not send message', e)
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json()

  await sendEmail(body)

  return NextResponse.json(body)
}

// const oldAuth = {
//   service: 'gmail',
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASSWORD,
//   },
// }
