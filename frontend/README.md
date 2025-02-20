## Getting Started

If necessary, install the required dependencies:

```bash
npm install
```

Now run the development server:

```bash
npm run dev
```

Open [http://localhost:3002](http://localhost:3002) with your browser to see the result.

## Auth

We are using authJS on the frontend, and the backend will read our cookies to authenticate the user by decoding the authJS token. This requires the frontend and backend to be on the same domain -- fine for local dev, but for production we'll have to be careful and probably use subdomains or a proxy.
