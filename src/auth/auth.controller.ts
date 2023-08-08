import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    
    @Post('signup')
    signup() {
        return 'I am signed up'
    }

    @Post('singin')
    signin() {
        return 'I am sign in'
    }
}
