import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: string[] = ["Habitat dome", "Drones","Food containers", "Oxygen tanks"]
  
  equipmentBeingEdited: number; //index of equipment being edited

  constructor() { }

  ngOnInit() {
  }

  add(equipmentName: string) {
    this.equipment.push(equipmentName);
  }

  remove(equipmentName: string) {
    let index = this.equipment.indexOf(equipmentName);
    this.equipment.splice(index, 1);
  }

  edit(equipment: string) {
    this.equipmentBeingEdited = index;
 }

 save(equipmentName: string, index: number) {
  this.equipment[index] = equipmentName;
  this.equipmentBeingEdited = null;
  }

}
