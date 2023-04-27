import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'
@Entity()
export class tbCart {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    product_name:string

    @Column()
    prize:number

    @CreateDateColumn()
    createAt: Date

    @UpdateDateColumn()
    updateAt: Date

}