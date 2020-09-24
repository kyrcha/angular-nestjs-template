# angular-nestjs-template

Template for building a web app with Angular, NestJS, Bootstrap, FontAwesome, Typeorm etc.

## Running in development mode

1. Open two terminals in `back-end` and `front-end` folders
2. In the `back-end` folders run `npm run start:dev`
3. In the `front-end` folders run `npm run start:dev`

This will build Angular with a watcher, put the compiled version to a directory (/dist) served via nest, while the API is also served via
nest from another path (/api).
