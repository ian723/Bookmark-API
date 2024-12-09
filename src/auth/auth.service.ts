import { Injectable } from "@nestjs/common";


@Injectable()
export class AuthService {
    static signup() {
        throw new Error("Method not implemented.");
    }


    signup() {
        return { msg: 'I have signed up' };
    }

    signin() {
        return { msg: 'I have signed in' };
    }
}