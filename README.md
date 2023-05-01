A simple portfolio site with a contact form made with Next.js 13 (beta) and Tailwind CSS.

## About The Project

This is the code for my portfolio site.  It uses [React Server Components](https://beta.nextjs.org/docs/rendering/server-and-client-components), the new Next.js 13 App Router, and a [Route Handler](https://beta.nextjs.org/docs/routing/route-handlers) for the contact form.  Feel free to use the code for your own project, but not the images.

## Run it locally

### Prerequisites

- You will need an email account to work with nodemailer for the contact form.  I used [Private Email](https://privateemail.com).

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/james-langridge/portfolio.git
   ```

2. Install NPM packages
   ```sh
   npm install
   ```

3. Copy `.env.example` to `.env.local` and update the variables.
    ```sh
    cp .env.example .env.local
    ```

6. Start the development server:
    ```sh
    npm run dev
    ```

## Deploy your own

You can clone and deploy this project on Vercel using the button below.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjames-langridge%2Fportfolio&env=SMTP_USER,SMTP_PASSWORD,EMAIL_TO,SMTP_HOST,SMTP_PORT)

See the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

Code distributed under the [MIT License](https://github.com/james-langridge/portfolio/blob/main/LICENSE).  Images copyright all rights reserved.
