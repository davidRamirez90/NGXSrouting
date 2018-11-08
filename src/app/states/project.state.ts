import { State } from '@ngxs/store';
import { ProjectsStateModel } from '../models/proyect.model';

@State<ProjectsStateModel>({
    name: 'projects',
    defaults: {
        items: []
    }
})

export class ProjectsState {}
