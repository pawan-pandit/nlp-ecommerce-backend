import { Injectable } from "@nestjs/common";
import { tbUser } from "../entity/user.entity";
import { tbUserPayment } from "../entity/user_payment.entity";
import { tbUserAddress } from "../entity/user_address.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(tbUser)
        private readonly userRepo: Repository<tbUser>,
        @InjectRepository(tbUserAddress)
        private readonly userAddresRepo: Repository<tbUserAddress>,
        @InjectRepository(tbUserPayment)
        private readonly userPaymentRepo: Repository<tbUserPayment>
    ) { }

    //user cruds
    /*async getOne(id: number) {
        return await this.userRepo
            .createQueryBuilder("user")
            .select([
                "user.id",
                "user.name",
                "user.phone"
            ])
            .where('user.id = :id', { id })
            .getOne()
    }*/

    async getUserById(id: number): Promise<tbUser> {
        return await this.userRepo.findOne({
            where: {
                id: id
            }
        });

    }

    async getAll(): Promise<tbUser[]> {
        return await this.userRepo.find()
    }

    async create(body: tbUser) {
        // console.log(body)
        const saved = await this.userRepo.save(body)
        return {
            statusCode: 200,
            message: "User Created",
            id: saved.id
        }
    }


    async updateOne(body: tbUser) {
        return (await this.userRepo.update(body.id, body)).affected > 0
    }

    //     console.log(body)      //kisko update krna hai // kya update krna  hai// problem 
    //     try {
    //        const user= await this.userRepo.update(id, body)
    //        console.log("created")
    //     } catch (error) {
    //         console.log("An error accured while updatind the record:" + error.message)
    //     }
    // }

    async delete(id: number) {
        return (await this.userRepo.delete(id)).affected > 0
    }
    //userAddress cruds

    async createAddress(body: tbUserAddress) {
        console.log(body)
        const saved = await this.userAddresRepo.save(body)
        return {
            statusCode: 200,
            message: "Address Created",
            id: saved.id
        }
    }

    async updateAddress(body: tbUserAddress) {
        console.log(body)
        return (await this.userAddresRepo.update(body.id, body,)).affected > 0
    }

    async deleteAddress(id: number) {
        return ((await this.userAddresRepo.delete(id)).affected > 0)
    }

    async getUserAddress(id: number) {
        return await this.userAddresRepo.findOne({
            where: {
                user: id
            },
            relations: ["user"] // user detail also fetch from user table
        });

    }
    //userPayment cruds

    async createPayment(body: tbUserPayment) {
        // console.log(body)
        const saved = await this.userPaymentRepo.save(body)
        return {
            statusCode: 200,
            message: "Address Created",
            id: saved.id
        }
    }

    async updatePayament(body: tbUserPayment) {
        return (await this.userPaymentRepo.update(body.id, body,)).affected > 0
    }

    async deletePayment(id: number) {
        return ((await this.userPaymentRepo.delete(id)).affected > 0)
    }

    async getUserPayment(id: number) {
        return await this.userPaymentRepo.findOne({
            where: {
                user: id
            }
        });

    }





}