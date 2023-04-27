import { Controller, Get, Post, Delete, Put, Param, Body } from "@nestjs/common";
import { UserService } from "../service/user.service"
import { tbUser } from "../entity/user.entity";
import { tbUserAddress } from "../entity/user_address.entity";
import { tbUserPayment } from "../entity/user_payment.entity";

@Controller("user")
export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly userAddressService: UserService,
        private readonly userPaymentService: UserService
    ) { }

    //user
    @Get(":id")
    async getSingleUserDetails(@Param("id") id: number): Promise<tbUser> {
        return this.userService.getUserById(id);
    }
    // @Get('id/:id')
    // async getUserById(@Param('id') id: number): Promise<tbUser> {
    //     return this.userService.getUserById(id);
    // }
    @Get()
    async getUserDetail(): Promise<tbUser[]> {
        return this.userService.getAll();
    }

    @Post()
    createUser(@Body() body: tbUser) {
        return this.userService.create(body);
    }
    @Put()
    update(@Body() body: tbUser) {
        return this.userService.updateOne(body);
    }
   

    @Delete("delete/:id")
    delete(@Param("id") id: number) {
        return this.userService.delete(id);
    }

    //userAddress
    @Post("create_ad")
    createAddress(@Body() body: tbUserAddress) {
        return this.userAddressService.createAddress(body);
    }

    
    

    @Put("update_ad")
    updateAddress(@Body() body: any) {
        console.log(body)
        return this.userAddressService.updateAddress(body);
    }

    
    

    @Delete("delete_ad/:id")
    deleteAddress(@Param("id") id: number) {
        return this.userAddressService.deleteAddress(id);
    }

    @Get('address/:id')
    getuserAddress(@Param("id") id: number) {
        return this.userAddressService.getUserAddress(id);
    }

    //userPayement

    @Post("create_pay")
    createPayment(@Body() body: tbUserPayment) {
        return this.userPaymentService.createPayment(body);
    }

    @Put("update_pay")
    updatePayment(@Body() body: tbUserPayment) {
        return this.userPaymentService.updatePayament(body);
    }

    @Delete("delete_pay")
    deletePayment(@Param("id") id: number) {
        return this.userPaymentService.deletePayment(id);
    }

    @Get('payment/:id')
    getuserPayment(@Param("id") id: number) {
        return this.userPaymentService.getUserPayment(id);
    }

}