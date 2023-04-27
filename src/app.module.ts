import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { UserModule } from './modules/user/user.module';
import { SharedModule } from './modules/shared/shared.module';
import { ProductModule } from './modules/product/product.module';
import { tbUser } from './modules/user/entity/user.entity';
import { tbUserAddress } from './modules/user/entity/user_address.entity';
import { tbUserPayment } from './modules/user/entity/user_payment.entity';

config()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      host: process.env.db_host,
      username: process.env.db_username,
      password: process.env.db_password,
      database: process.env.db_database,
      logging: true,
      entities: [tbUser, tbUserAddress, tbUserPayment],
      synchronize: true
    }), UserModule, SharedModule, ProductModule

  ],

})
export class AppModule { }
