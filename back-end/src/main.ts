import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Make the app listen from the API and up, the rest is handled by
  // static-serve
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT);
}
bootstrap();
