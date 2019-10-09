import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'; 
import { config } from 'dotenv';

config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const options = new DocumentBuilder() 
  .setTitle('User API') 
  .setDescription('The user API description') 
  .setVersion('1.0') 
  .addTag('user')
  .build(); 

const document = SwaggerModule.createDocument(app, options);     
SwaggerModule.setup('api', app, document); 

  await app.listen(3000);
}
bootstrap();
