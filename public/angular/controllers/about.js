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
      description: "I'd name my cat Time. And hope it's a really slow cat.",
      github: "https://github.com/yzxj",
      linkedin: "https://www.linkedin.com/justyzx"
    },
    {
      name: "Grace",
      role: "Design",
      description: "Nerdy movie nerd",
      linkedin: "https://sg.linkedin.com/in/gracenglc"
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
      description: "Ty Parsec",
      github: "https://github.com/yaoxiangg",
      linkedin: "https://www.linkedin.com/in/teryaoxiang"
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
