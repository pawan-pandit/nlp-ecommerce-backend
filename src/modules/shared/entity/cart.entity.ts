import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'
@Entity()
export class tbCart {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    user: string

    @CreateDateColumn()
    createAt: Date

    @UpdateDateColumn()
    updateAt: Date

}