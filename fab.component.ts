import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bz-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss']
})
export class BzFabComponent implements OnInit {
  @Input() tooltipText: string;
  @Input() type: string;
  public icon: string;
  public replacementIcon: string;
  public transform: string;
  public additionalClass: string;
  public listTypes = [
    {
      type: 'add-property', icon: 'bz-icon-plus-outline', replacementIcon: ' bz-icon-add-attribute',
      transform: 'bz-fab__transform', additionalClass: 'bz-add-property'
    },
    { type: 'save', icon: ' bz-icon-save', replacementIcon: 'bz-fab__i_hide', transform: '', additionalClass: '' }
  ];

  public constructor() { }

  public ngOnInit(): void {
    this.getType();
  }

  public getType(): void {
    let _type = this.listTypes.find(t => t.type === this.type);
    this.icon = _type.icon;
    this.replacementIcon = _type.replacementIcon;
    this.transform = _type.transform;
    this.additionalClass = _type.additionalClass;
  }
}
