import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { UsecasesComponent } from './about/usecases/usecases.component'
import { DashboardComponent } from './core/dashboard/dashboard.component'
import { MoviesComponent} from './movies/movies.component'
import { DetailMovieComponent} from './movies/detail/detail-movie/detail-movie.component'
import { MovieShowComponent} from './movie_show/movie-show/movie-show.component'

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'movie', component: MoviesComponent },
  { path: 'about', component: UsecasesComponent },
  { path: 'detailMovie', component: DetailMovieComponent},
  { path: 'movieShow', component: MovieShowComponent},
  { path: '**', redirectTo: '/' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
