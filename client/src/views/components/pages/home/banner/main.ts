module CompProto {
  export module Components {
    export module Home {
      export class Banner extends Backbone.View { // Bad inheritance
        page: Backbone.View
        models: ModelsMap
        el: string

        constructor(page: Backbone.View, models: ModelsMap) {
          super();

          this.page = page;
          this.models = models;
          this.el = ".js_banner";
          this.set_bg()
        }



        set_bg() {
          this.listenTo(
            this.page,
            "ready",
            () => {
              $(this.el).css("background-image", "url(" + this.models["banner"].get("img") + ")")
            }
          )
        }
      }
    }
  }
}