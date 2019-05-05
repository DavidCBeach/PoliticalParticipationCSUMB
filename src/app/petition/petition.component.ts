import { Component, OnInit } from '@angular/core';
import { Pet } from "../pet";
import { GetsetpetService } from '../getsetpet.service';

@Component({
  selector: 'app-petition',
  templateUrl: './petition.component.html',
  styleUrls: ['./petition.component.scss']
})

export class PetitionComponent implements OnInit {
  petitions: Pet[];
  testpet : Pet[] = [
    { _id: 'a000', title: 'Petition1', description: 'Information about this petition the jclkds l;kcj as;lkjdcljasdlck jal;ks dclk;jasdlkcjlkjsadfnlcjla sjef lknalksdj flk vnsdkljflwe;nicjasdkjfnlaksjdfl;javk elkjskldfjsdk;lckafjl ksdjk vkajsfjlksdvn ljasefn klsjvlkaewjkflkjsadkvnlaksdjvlkenfkljsdlkvnklajsd lkfn;ihvljkjasjlkfjasdlkjkdsfjsdds fkds f sdfl sdfjksdfkl avklaskjv kldsjfklj avlkjslkaj lkv dsklvnsdkcn kjsdfjnv klsdjlkfj kv k;ljsoiehfisudvhafskjhsdkl j lvknvi;sglahsvnavsk ghihasdfh', numSignatures: 77},
    { _id: 'a001', title: 'Petition2', description: 'description2', numSignatures: 1},
    { _id: 'a002', title: 'Petition3', description: 'description3', numSignatures: 3},
    { _id: 'a003', title: 'Petition4', description: 'description4', numSignatures: 770000000000}
  ];

  selectedpet : Pet;
  
  constructor(private getsetpetService: GetsetpetService) { }

  ngOnInit() {
     this.getPets();
     //this.selectedpet.title = '';
  }

  getPets(): void{
    this.getsetpetService.getPet()
    .subscribe(petitions => this.petitions = petitions);
  }
  onSelect(pet: Pet): void{
    this.selectedpet = pet;
    console.log("selectedpet set to :", this.selectedpet.title)
  }
}
