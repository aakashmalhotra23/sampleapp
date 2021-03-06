import { Component, OnInit } from '@angular/core';
import {ServerDb} from '../../server-db';
import {Router} from '@angular/router';
import {ServerDbService} from '../../shared_service/server-db.service';
import { create } from 'domain';
import { createServer } from 'https';
import { error } from 'protractor';


@Component({
  selector: 'app-server-db-form',
  templateUrl: './server-db-form.component.html',
  styleUrls: ['./server-db-form.component.css']
})
export class ServerDbFormComponent implements OnInit {
public server:ServerDb
  constructor(private _serverDbService:ServerDbService, private _router: Router) { }

  ngOnInit(): void {
    this.server=this._serverDbService.getter()
  }

  processForm(){
    if(this.server.sno==undefined){
      this._serverDbService.createServer(this.server).subscribe((server)=>{
        console.log(server);
        this._router.navigate(['/']);
      },(error)=>{
        console.log(error);
        this._router.navigate(['/']);

      });
    }else
    {
        this._serverDbService.updateServer(this.server).subscribe((server)=>{
          console.log(server);
        },(error)=>{
          console.log(error);
        });
      }
    
  }
}
