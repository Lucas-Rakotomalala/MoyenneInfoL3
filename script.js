(function () {

  var app = angular.module('myApp', []);

  app.controller('myController', function ($scope) {

    $scope.Mods = [
      {
        nom: 'Programmation Concurente',
        matieres: [
          {
            nom: 'CCI',
            note: 10,
            coeff: 0.3
          },
          {
            nom: 'TP',
            note: 10,
            coeff: 0.3
          },
          {
            nom: 'CCF',
            note: 10,
            coeff: 0.4
          }
        ],
        coeff: 3,
        moyenne: 0
      },
      {
        nom: 'Réseaux',
        matieres: [
          {
            nom: 'TP',
            note: 10,
            coeff: 0.25
          },
          {
            nom: 'CCI',
            note: 10,
            coeff: 0.3
          },
          {
            nom: 'CCF',
            note: 10,
            coeff: 0.45
          },
          {
            nom: 'Moyenne Qroc',
            note: null,
            coeff: null
          },

        ],
        coeff: 6,
        moyenne: 0
      },
      {
        nom: 'Language Formels',
        matieres: [
          {
            nom: 'CC1',
            note: 10,
            coeff: 0.15
          },
          {
            nom: 'CC2',
            note: 10,
            coeff: 0.15
          },
          {
            nom: 'TP',
            note: 10,
            coeff: 0.30
          },
          {
            nom: 'CCF',
            note: 10,
            coeff: 0.40
          },
        ],
        coeff: 3,
        moyenne: 0
      },
      {
        nom: 'Logique Classqiue',
        matieres: [
          {
            nom: 'Moyenne UE',
            note: 10,
            coeff: 1
          },
        ],
        coeff: 3,
        moyenne: 0
      },
      {
        nom: 'Projet',
        matieres: [
          {
            nom: 'Note Projet',
            note: 10,
            coeff: 1
          },
        ],
        coeff: 6,
        moyenne: 0
      },
      {
        nom: 'Complexité',
        matieres: [
          {
            nom: 'CCI',
            note: 10,
            coeff: 0.3
          },
          {
            nom: 'Projet',
            note: 10,
            coeff: 0.4

          },
          {
            nom: 'CCF',
            note: 10,
            coeff: 0.3
          },
        ],
        coeff: 6,
        moyenne: 0
      },
      {
        nom: 'POO',
        matieres: [
          {
            nom: 'CC',
            note: 10,
            coeff: 0.3
          },
          {
            nom: 'Projet',
            note: 10,
            coeff: 0.3
          },
          {
            nom: 'CCF',
            note: 10,
            coeff: 0.4
          },
        ],
        coeff: 6,
        moyenne: 0
      },
      {
        nom: 'Base de données',
        matieres: [
          {
            nom: 'CCI',
            note: 10,
            coeff: 0.165
          },
          {
            nom: 'TP',
            note: 10,
            coeff: 0.165
          },
          {
            nom: 'CCF',
            note: 10,
            coeff: 0.67
          }
        ],
        coeff: 6,
        moyenne: 0
      },
      {
        nom: 'Option 1',
        matieres: [
          {
            nom: 'CC1',
            note: 10,
            coeff: 0.5
          },
          {
            nom: 'CC2',
            note: 10,
            coeff: 0.5
          },
        ],
        coeff: 3,
        moyenne: 0
      },
      {
        nom: 'Option 2',
        matieres: [
          {
            nom: 'CC1',
            note: 10,
            coeff: 0.5
          },
          {
            nom: 'CC1',
            note: 10,
            coeff: 0.5
          },
        ],
        coeff: 3,
        moyenne: 0
      }
    ];

    $scope.moy = function () {
      var total = 0;
      for (var i = 0; i < $scope.Mods.length; i++) {
        for (var j = 0; j < $scope.Mods[i].matieres.length; j++) {
          total += Number($scope.Mods[i].matieres[j].note);
        }
        var average = total / $scope.Mods[i].matieres.length;
        $scope.Mods[i].moyenne = average;
        return average;
      }
    };//end method

    //$scope.moyenne();
    $scope.moyenne = function (obj) {
      var total = 0, coeffs = 0;
      for (var i = 0; i < obj.matieres.length; i++) {
        if (!isNaN(obj.matieres[i].note) && obj.matieres[i].note!=null) {
          total += (Number(obj.matieres[i].note)) * (Number(obj.matieres[i].coeff));
          coeffs += obj.matieres[i].coeff;
        }
      }
      var average = (parseInt((total / coeffs) * 1000) / 1000).toFixed(3);
      obj.moyenne = average;
      return average;
    };

    //general average
    $scope.moyGen = function (obj) {
      var total = 0, coeffs = 0;
      for (var i = 0; i < 10; i++) {
        if (!isNaN(obj[i].moyenne)) {
          total += (Number(obj[i].moyenne)) * (Number(obj[i].coeff));
          coeffs += obj[i].coeff;
        }
      }
      var genAvg = (parseInt((total / coeffs) * 1000) / 1000).toFixed(3);
      return genAvg;
    };


  });//end controller

})();//end global closure