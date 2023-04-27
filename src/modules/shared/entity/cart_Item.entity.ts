import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'
@Entity()
export class tbCart {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    cart:number

    @Column()
    user:number

    @CreateDateColumn()
    createAt: Date

    @UpdateDateColumn()
    updateAt: Date

}