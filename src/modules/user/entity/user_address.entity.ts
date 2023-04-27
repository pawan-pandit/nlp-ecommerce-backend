
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { tbUser } from "./user.entity";

@Entity()
export class tbUserAddress {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(type => tbUser)
    user: number

    @Column()
    state: string

    @Column()
    district: string

    @Column({ nullable: true })
    current_address: string

    @Column()
    permanent_address: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

}
