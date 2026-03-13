import { Component, Input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
interface TabsDetails {
  name: string
  content: string
}
@Component({
  selector: 'app-tabs-content',
  imports: [MatTabsModule],
  templateUrl: './tabs-content.html',
  styleUrl: './tabs-content.scss',
})
export class TabsContent {
  @Input() tabs: TabsDetails[] = [];
}
