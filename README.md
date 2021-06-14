# Github Plastic

Project created for the entrance assignment of Creative Code. Log in and see your profile and your repositories.

## Building from source

Firstly you will need a Github Access Token. Go to [Personal access tokens](https://github.com/settings/tokens). Create a token with `public_repo` and `read:user`. Then create a file in the app folder called `.env.local` and put your token as follow:

```ini
NEXT_PUBLIC_TOKEN=YOURTOKEN
```

Next you will need to install the dependencies and build the project:

```bash
yarn
yarn build
```

Then you can run the project:

```bash
yarn start
```
