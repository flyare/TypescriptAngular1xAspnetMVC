module App.Controller {
    import Student = App.Model.Student;

    export class HomeController {
        static $inject = ['App.Service.HomeService'];
        students: Array<Student> = [
            { firstName: "Duc", lastName: "Phan Hoang", age: 35, address: "HN", active: true }
        ];
        constructor(private homeService: Service.HomeService) {
            this.getStudents();
        }

        getStudents = () => {
            this.homeService.getStudents().then((data) => {
                this.students = data;
            });
        }
    }

    angular.module("myApp").controller("App.Controller.HomeController", HomeController);
}