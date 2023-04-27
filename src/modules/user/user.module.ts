import { Module } from "@nestjs/common";
import { tbUser } from "./entity/user.entity";
import { tbUserPayment } from "./entity/user_payment.entity";
import { tbUserAddress } from "./entity/user_address.entity";
import { UserService } from "./service/user.service";
import { UserController } from "./controller/user.controller";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    controllers:[UserController],
    providers:[UserService],
    imports:[
        TypeOrmModule.forFeature([ tbUser,tbUserAddress,tbUserPayment])
    ]
})
export class UserModule{}