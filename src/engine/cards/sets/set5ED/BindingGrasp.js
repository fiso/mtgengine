'use strict';
const Constants = require('../../../Constants');
const BindingGraspBase = require('../setME2/BindingGrasp');

class BindingGrasp extends BindingGraspBase {
  constructor (game) {
    super(game, 'Binding Grasp', 'Fifth Edition', '5ED');
  }
}

module.exports = BindingGrasp;
