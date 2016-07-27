/// <reference path="dts/backbone.d.ts" />
/// <reference path="dts/templates.d.ts" />

module CompProto {
  export interface ModelsMap {
      [key: string]: Backbone.Model
  }

  export class Router extends Backbone.Router {
    constructor() {
      super();

      // Call _bindRoutes() here function to bind your routes
      this._bindRoutes();
    }

    models = {
      banner: null
    }
    components = {
      home: {
        main: null,
        banner: null
      }
    }


    routes = {
      "": "home"
    }

    home() {
      var models: ModelsMap = {
        banner: new CompProto.Models.Banner()
      }

      this.components.home.main = new CompProto.Components.Home.Main(models);
      this.components.home.banner = new CompProto.Components.Home.Banner(this.components.home.main, models);
    }
  }


  $(() => {
    var router = new Router();

    Backbone.history.start();
  });
}