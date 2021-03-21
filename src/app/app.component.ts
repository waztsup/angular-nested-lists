import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "";

  originalList = [
    {
      name: "level 1 - item 1",
      children: [
        {
          name: "level 2 - item 1",
          children: [
            {
              name: "level 3 - item 1",
              children: undefined
            },
            {
              name: "level 3 - item 2",
              children: [
                {
                  name: "level 4 - item 1"
                }
              ]
            },
            {
              name: "level 3 - item 3",
              children: []
            }
          ]
        },

        {
          name: "level 2 - item 2",
          children: [
            {
              name: "level 3 - item 1",
              children: undefined
            },
            {
              name: "level 3 - item 2",
              children: [
                {
                  name: "level 4 - item 1"
                }
              ]
            },
            {
              name: "level 3 - item 3",
              children: []
            }
          ]
        }
      ]
    },
    {
      name: "level 1 - item 2",
      children: [
        {
          name: "level 2 - item 1",
          children: [
            {
              name: "level 3 - item 1",
              children: undefined
            },
            {
              name: "level 3 - item 2",
              children: undefined
            },
            {
              name: "level 3 - item 3",
              children: []
            }
          ]
        }
      ]
    }
  ];
  magicList = [];

  ngOnInit(): void {
    this.magicList = this.originalList;
  }

  updateList($event): void {
    console.log($event);
    try {
      const newList = JSON.parse($event.srcElement.value);
      if (newList && newList.length > 0) {
        this.magicList = newList;
      } else {
        this.magicList = this.originalList;
      }
    } catch (e) {
      console.log(e);
    }
  }
}
