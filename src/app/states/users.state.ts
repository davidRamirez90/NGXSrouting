import { State } from '@ngxs/store';
import { UsersStateModel } from '../models/proyect.model';

@State<UsersStateModel>({
    name: 'projects',
    defaults: {
        users: []
    }
})

export class UsersState {}