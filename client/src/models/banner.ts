module CompProto {
  export module Models {
    export class Banner extends Backbone.Model {
      constructor() {
        super();

        this.req();
      }

      req() {
        var ajaxSettings = {
          type: "POST",
          url: "api/v1/banner",
          success: (data) => {
            this.set(data.success)

            this.trigger("ready")
          }
        };

        $.ajax(ajaxSettings);
      }
    }
  }
}