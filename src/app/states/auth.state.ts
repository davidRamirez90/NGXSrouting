import { State, Selector, Action, StateContext } from '@ngxs/store';
import { AuthStateModel } from '../models/proyect.model';
import { ProjectsState } from './project.state';
import { UsersState } from './users.state';
import { Login, LoginSuccesfull, Logout, logoutSuccesfull } from '../actions/auth.actions';
import { Navigate } from '@ngxs/router-plugin';
import { timeout } from 'q';

@State<AuthStateModel>({
    name: 'auth',
    defaults: {
        name: 'david',
        password: 'mypass',
        loggedIn: true,
    },
    children: [
        ProjectsState,
        UsersState
    ]
})

export class AuthState {

    @Selector()
    static loggedIn(state: AuthStateModel) {
        return state.loggedIn
    }

    @Selector()
    static userName(state: AuthStateModel) {
        return state.name;
    }

    @Action( Login )
    login( ctx: StateContext<AuthStateModel>, action: Login) {
        ctx.patchState({
            name: action.payload.user,
            password: action.payload.pass,
            loggedIn: true
        })
        setTimeout(() => {
            ctx.dispatch( new LoginSuccesfull());
        }, 1500)
    }

    @Action( Logout )
    logout( ctx: StateContext<AuthStateModel>, action: Logout) {
        ctx.setState({
            name: "",
            password:""
        });
        ctx.dispatch(new logoutSuccesfull());
    }

    @Action( LoginSuccesfull )
    loginSuccesfull( ctx: StateContext<AuthStateModel>, action: LoginSuccesfull) {
        ctx.dispatch( new Navigate(['/']));
    }

    @Action( logoutSuccesfull )
    logoutSuccesfull( ctx: StateContext<AuthStateModel>, action: LoginSuccesfull) {
        ctx.dispatch( new Navigate(['/login']));
    }

}
