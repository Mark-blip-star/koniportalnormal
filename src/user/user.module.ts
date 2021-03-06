import { forwardRef, Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Roles } from "../roles/entities/roles.entity";
import { MailModule } from "../mail/mail.module";
import { TokenModule } from "../token/token.module";
import { ConfigModule } from "@nestjs/config";
import { ProfileModule } from "../profile/profile.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Roles]),
    forwardRef(() => ProfileModule),
    MailModule,
    TokenModule,
    ConfigModule,
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
