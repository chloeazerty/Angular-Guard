import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {

  constructor(private userService: UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.isAuthorised(route);
}

private isAuthorised(route: ActivatedRouteSnapshot) : boolean {
  const roles = ['admin', 'user'];
  const expectedRoles = route.data['expectedRoles'];
  const roleMatches = roles.findIndex(role => expectedRoles.indexOf(role) !== -1);
  return roleMatches < 0 ? false : true;
}

}
