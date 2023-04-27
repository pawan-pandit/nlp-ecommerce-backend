import{Entity , PrimaryGeneratedColumn , Column,CreateDateColumn,UpdateDateColumn, ManyToOne} from "typeorm";
import { tbUser } from "./user.entity";
import { tbUserAddress } from "./user_address.entity";
// import {  } from "@nestjs/typeorm";

@Entity()
export class  tbUserPayment{
    @PrimaryGeneratedColumn()
    id:number

    // @Column()
    // username:string

    @ManyToOne(type=>tbUser)
    user:number

    
    @Column()
    payment_mode:string

    @Column()
    card_number:string

    @Column()
    expire_date:string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt:Date



}