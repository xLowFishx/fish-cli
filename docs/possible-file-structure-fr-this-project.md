# Files Structure POC for this CLI Project

... Before I forget...Below is the fils structure I might follow for this project in the long term.

```
my-cli/
├─ package.json
├─ README.md
├─ .gitignore
├─ .env.example
├─ bin/
│  └─ my-cli.js                # CLI entrypoint (#!/usr/bin/env node)
├─ src/
│  ├─ index.js                 # App bootstrap
│  ├─ cli.js                   # Commander/Yargs setup
│  ├─ commands/
│  │  ├─ init.command.js
│  │  ├─ run.command.js
│  │  └─ custom.command.js
│  ├─ services/
│  │  ├─ taskRunner.js         # Core task execution logic
│  │  ├─ configLoader.js       # Reads user config/customization
│  │  └─ pluginLoader.js       # Loads custom command/task plugins
│  ├─ config/
│  │  ├─ defaults.js
│  │  └─ schema.js             # Validates user config
│  ├─ utils/
│  │  ├─ logger.js
│  │  ├─ errors.js
│  │  └─ fileSystem.js
│  └─ templates/
│     └─ sample-config.json
├─ tests/
│  ├─ unit/
│  │  ├─ commands/
│  │  │  ├─ init.command.test.js
│  │  │  └─ run.command.test.js
│  │  ├─ services/
│  │  │  ├─ taskRunner.test.js
│  │  │  └─ configLoader.test.js
│  │  └─ utils/
│  │     └─ fileSystem.test.js
│  └─ fixtures/
│     └─ sample-project/
└─ docs/
   ├─ commands.md
   └─ customization.md
```