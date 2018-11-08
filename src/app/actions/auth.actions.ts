export class Login {
    static readonly type = '[Auth] Login]';
    constructor(public readonly payload?: any) {}
}

export class Logout {
    static readonly type = '[Auth] Logout]';
}

export class logoutSuccesfull {
    static readonly type = '[Auth] logoutSuccesfull]';
}

export class LoginSuccesfull {
    static readonly type = '[Auth] LoginSuccesfull';
}

export class LoginFailed {
    static readonly type = '[Auth] LoginFailed]';
}
