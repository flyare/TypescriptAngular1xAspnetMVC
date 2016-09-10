/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
module App {
    export class Main {
        static run = ():void => {
            var myApp = angular.module("myApp", ['ui.router']);
            myApp.config(Routers.configRoute);
        }
    }

    Main.run();
}