
export interface AuthStateModel {
    name: string,
    password: string,
    loggedIn?: boolean
}

export interface ProjectsStateModel {
    items: any[]
}

export interface UsersStateModel {
    users: any[]
}
