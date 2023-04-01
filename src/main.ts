import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { morganMiddleware } from './middlewares/morgan.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(morganMiddleware);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000, () => {
    console.log('Listening on port 3000');
  });
}
bootstrap();
