/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
module App.Service {
    import Student = App.Model.Student;

    export class HomeService {
        static $inject = ["$http"];

        constructor(private $http: ng.IHttpService) {
        }

        getStudents = (): ng.IPromise<Array<Student>> => {

            let result: ng.IPromise<Array<Student>> = this.$http.get("/Home/GetStudents").then((data) => {
                return data.data;
            });

            return result;
        }
    }

    angular.module("myApp").service("App.Service.HomeService", HomeService);
}