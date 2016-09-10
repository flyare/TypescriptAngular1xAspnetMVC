/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
module App.Service {
    import Student = App.Model.Student;

    export class HomeService {
        static $inject = ["$http"];
        /*getStudents = ():Array<Student> => [
            { firstName: "Duc", lastName: "Phan Hoang", age: 35, address: "HCM", active: true },
            { firstName: "Tran", lastName: "Tam Phong", age: 20, address: "HN", active: true },
            { firstName: "Quynh", lastName: "Duong Dai", age: 58, address: "Hue", active: false },
            { firstName: "Son", lastName: "Cao Thai", age: 27, address: "NGA", active: false }
        ]*/

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