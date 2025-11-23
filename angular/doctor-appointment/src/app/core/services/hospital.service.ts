import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {environment} from '../../../environments/environment'
import {Constants} from '../constants/Constants'
import {Hospital} from '../classes/Hospital.model'
import {ApiResponse} from '../classes/ApiResponse.model'
import {User} from '../classes/User.model'

@Injectable({
    providedIn: 'root'
})
export class HospitalService {

    constructor(private http: HttpClient) {
    }

    registerHospital(hospital: Hospital): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(environment.api_url + Constants.API_ENDPOINT.ADD_NEW_HOSPITAL, hospital);
    }

    login(user: User): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(environment.api_url + Constants.API_ENDPOINT.LOGIN, user);
    }
}
