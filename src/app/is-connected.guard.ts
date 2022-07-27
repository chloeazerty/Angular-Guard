import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class IsConnectedGuard implements CanActivate {

  constructor(private userService: UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAuthorised(route); // return false;bloque l'accès à la page
 } 

  private isAuthorised(route: ActivatedRouteSnapshot) : boolean {
    const roles = ['user'];
    const expectedRoles = route.data['expectedRoles'];
    const roleMatches = roles.findIndex(role => expectedRoles.indexOf(role) !== -1);
    return roleMatches < 0 ? false : true;
  }


}
