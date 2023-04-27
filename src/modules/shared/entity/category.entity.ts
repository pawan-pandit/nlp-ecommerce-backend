import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'
@Entity()
export class tbCategory {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @CreateDateColumn()
    createAt: Date

    @UpdateDateColumn()
    updateAt: Date

}