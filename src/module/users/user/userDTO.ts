import { IsNotEmpty, MinLength, IsEmail, IsEnum } from "class-validator";

enum Gender {
    MALE = 'male',
    FEMALE = 'female',
    NOT_SPECIFIED = 'not specified'
};

export class UserDto {
    @IsNotEmpty()
    readonly name: string;

    @IsEmail()
    @IsNotEmpty ()
    readonly email: string;
    
    @IsNotEmpty ()
    @MinLength(6)
    readonly password: string;

    @IsNotEmpty()
    @IsEnum(Gender, {
        message: "Gender must either be male or female or not specified"
    })
    readonly gender: Gender;
}