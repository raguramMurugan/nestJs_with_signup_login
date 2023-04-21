import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly userService: UsersService) {
        super({
             jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
             ignoreExpiration: false,
             secretOrKey: process.env.jwt_secret,
        });
    }

    async validate(payload: any) {
        // check if user in the token actually exist
        const user = await this.userService.findOneByEmail(payload.email);
        if (payload.email === user.email) {
            console.log(payload.email)
            console.log(user.email)
            return payload;
        }
        else {
            throw new UnauthorizedException('You are not authorized to perform the operation');
        }
        
    }
}