import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PixelartService } from 'src/app/core/services/pixelart.service';
import { PixelartItem } from '../../model/pixelart-item';
import { PixelartModel } from '../../model/pixelart-model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  // public pixelartItemToCreate = new PixelartItem();
  public pixelartItemToCreate!: PixelartItem;
  public newPixelartModel = new PixelartModel();
  // newPixelartModel = {} as PixelartModel;

  constructor(
    private pixelartService: PixelartService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {
    // this.route.snapshot.


    //  TODO: Butasag, hiszen itt meg nincs semmi id ertek!
      // const id = Number(params.get('id'));
      // console.log(id);
      // this.newPixelartModel.id = id;
      // this.newPixelartModel.name = '';


      // this.pixelartService.getById(id).subscribe((pixelartModel: PixelartModel) => {
      //   this.newPixelartModel = pixelartModel;
      // })
  
   }

  ngOnInit(): void {
    // this.http.post<any>('https://reqres.in/api/posts', { title: 'Angular POST Request Example' }).subscribe(data => {
    //     this.postId = data.id;
    // })
  }

  public closeCreateNewPixelart(): void {
    this.router.navigate(['/pixelart/catalog'])
  }

  public onCancelGoBackToCatalog(): void {
    this.router.navigate(['/pixelart/catalog'])
  }

  public onSaveCreatePixelart(createdPixelartModel: PixelartModel): void {
    console.log("Received new pixelartItem: ", createdPixelartModel);
  
    this.pixelartService.add(createdPixelartModel).subscribe(() => {
      // TODO: The catalog should be updated/refreshed!!!
      this.router.navigate(['/pixelart/catalog'])
    })
  }


  // TODO: This is the part without the PixelartModel, but with the interface PixelartItem:
  // public onSaveCreatePixelart(createdPixelartItem: PixelartItem): void {
  //   console.log("Received new pixelartItem: ", createdPixelartItem);
  //   this.pixelartService.add(createdPixelartItem).subscribe(() => {
  //     this.router.navigate(['/pixelart/catalog'])
  //   })
  // }
  // public onSaveCreatePixelart(designedPixelartItem: PixelartItem): void {
  //   console.log("Received new pixelartItem: ", designedPixelartItem);
  //   this.pixelartService.add(designedPixelartItem).subscribe(() => {
  //     this.router.navigate(['/pixelart/catalog'])
  //   })
  // }

}
