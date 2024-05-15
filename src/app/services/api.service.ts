import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUser(githubUsername: string) {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`,{
      headers:{
        "Authorization": `token ${'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'}`
      }
    });
  }

  getRepos(githubUsername:string){
    return  this.httpClient.get(`https://api.github.com/users/${githubUsername}/repos`,{
      headers:{
        "Authorization": `token ${'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'}`
      }
    });
  }

  getReposByPage(githubUsername:string,pageNo:string,ItemsPerPage:string){
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}/repos?page=${pageNo}&per_page=${ItemsPerPage}`,{
      headers:{
        "Authorization": `token ${'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'}`
      }
    })
  }


  // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
}
