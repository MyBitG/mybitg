# Contributing

Thanks for your interest in contributing to MyBitG. We're happy to have you here.

Please take a moment to review this document before submitting your first pull request. We also strongly recommend that you check for open issues and pull requests to see if someone else is working on something similar.

If you need any help, feel free to reach out to [@psycarlo](https://x.com/MindsetPsy).

## About this repository

This repository is a monorepo.

- We use [yarn](https://yarnpkg.com/) and [`workspaces`](https://classic.yarnpkg.com/lang/en/docs/workspaces/) for development.
- We use [turborepo](https://turbo.build/repo) as our build system.
- We use [changesets](https://github.com/changesets/changesets) for managing releases.

## Structure

This repository is structured as follows:

```
apps
├── desktop
├── docs
└── www
packages
├── eslint-config
└── tailwind-config
```

| Path                       | Description                                |
| -------------------------- | ------------------------------------------ |
| `apps/desktop`             | The desktop wallet code.                   |
| `apps/docs`                | My Bit G documentation website.            |
| `apps/www`                 | My Bit G website.                          |
| `packages/eslint-config`   | Eslint configurations that apps use.       |
| `packages/tailwind-config` | Tailwind configuration shared across apps. |

## Development

### Fork this repo

You can fork this repo by clicking the fork button in the top right corner of this page.

### Clone on your local machine

```bash
git clone https://github.com/your-username/mybitg.git
```

### Navigate to project directory

```bash
cd mybitg
```

### Create a new Branch

```bash
git checkout -b my-new-branch
```

### Install dependencies

```bash
yarn install
```

### Run a workspace

You can use the `yarn workspace <workspace> <command>` command to start the development process for a workspace.

#### Examples

1. To run the desktop app:

```bash
yarn workspace desktop dev
```

2. To run the website:

```bash
yarn workspace www dev
```

## Documentation

The documentation for this project is located in the `docs` workspace. You can run the documentation locally by running the following command:

```bash
yarn workspace docs dev
```

Documentation is written using markdown.

## Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category: message` in your commit message while using one of
the following categories:

- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

  e.g. `feat: add loading prop to button component`

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/.

## Testing

Tests are written using [Vitest](https://vitest.dev). You can run all the tests from the root of the repository.

```bash
yarn test
```

Please ensure that the tests are passing when submitting a pull request. If you're adding new features, please include tests.
