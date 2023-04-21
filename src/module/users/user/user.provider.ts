import { User } from './user.entity';
import { USER_REPOSITORY } from 'src/core/database/constant';

export const usersProviders = [{
    provide: USER_REPOSITORY,
    useValue: User,
}];