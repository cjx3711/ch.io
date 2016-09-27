app.controller('aboutController', ['$scope', '$rootScope', 'dataService', function ($scope, $rootScope, dataService) {
  $scope.members = [
    {
      name: "Jia Xun",
      role: "DevOps",
      description: "Tinkerer, easily distrac..",
      github: "https://github.com/cjx3711",
      linkedin: "https://www.linkedin.com/in/chaijiaxun"
    },
    {
      name: "Justin",
      role: "Frontend",
      description: "That logo isn't symmetrical.",
      github: "https://github.com/yzxj",
      linkedin: "https://www.linkedin.com/justyzx"
    },
    {
      name: "Grace",
      role: "Design",
      description: "Cool description of member",
      linkedin: "https://www.linkedin.com/"
    },
    {
      name: "Mervyn",
      role: "Data",
      description: "Cool description of member",
      github: "https://github.com/",
      linkedin: "https://www.linkedin.com/"
    },
    {
      name: "Yao Xiang",
      role: "Backend",
      description: "Cool description of member",
      github: "https://github.com/",
      linkedin: "https://www.linkedin.com/"
    },
    {
      name: "Haritha",
      role: "Visualisations",
      description: "Cool description of member",
      github: "https://github.com/",
      linkedin: "https://www.linkedin.com/"
    }
  ]
}]);
