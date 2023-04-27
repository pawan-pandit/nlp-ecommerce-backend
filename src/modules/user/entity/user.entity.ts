import{Entity , PrimaryGeneratedColumn , Column,CreateDateColumn,UpdateDateColumn} from "typeorm";

@Entity()
export class  tbUser{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column()
    email:string

    @Column()
    phone:string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt:Date



}