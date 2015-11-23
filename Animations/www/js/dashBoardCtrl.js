angular.module('starter.controllers', [])

.controller('dashBoardCtrl', function ($scope) {

    // sample data
    $scope.pencils = [
        { name: 'lyra', type: 'graphite', country: 'germany' },
        { name: 'staedtler', type: 'graphite', country: 'australlia, germany, usa'},
        { name: 'pilot', type: 'mechanical' , country:'japan'},
        { name: 'stabilo', type: 'graphite', country: 'germany'},
        { name: 'faber castell', type: 'graphite',country:'brazil, germany, usa' },
        { name: 'mongol', type: 'graphite', country:'philippines'},
        { name: 'rotring', type: 'mechanical',country:'germany' },
        { name: 'yact', type: 'graphite', country: 'japan' },
        { name: 'franbel', country: 'france' },
        { name: 'general pencil', country: 'usa' },
        { name: 'sanford corp', country: 'usa' },
        { name: 'johann kramer', country: 'germany' },
        { name: 'cumberland', country: 'england'}
    ];
})

