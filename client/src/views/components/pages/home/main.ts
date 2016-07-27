module CompProto {
  export module Components {
    export module Home {
      export class Main extends Backbone.View {
        models: ModelsMap
        el: string

        constructor(models: ModelsMap) {
          super();

          this.models = models;
          this.el = ".js_wrapper";
          this.render();
        }


        render() {
          this.listenTo(
            this.models["banner"],
            "ready",
            () => {
              var options: any = {
                discount: this.models["banner"].get("discount"),
                title: this.models["banner"].get("title"),
                desc: this.models["banner"].get("desc"),
                button: {
                  mods: "button_banner", // Move to Jade
                  text: this.models["banner"].get("button_text")
                }
              }

              $(this.el).html(tmpl_components_main_main(options))

              this.trigger("ready")
            }
          )
        }
      }
    }
  }
}