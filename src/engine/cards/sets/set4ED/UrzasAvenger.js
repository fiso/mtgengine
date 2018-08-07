'use strict';
const Constants = require('../../../Constants');
const UrzasAvengerBase = require('../set5ED/UrzasAvenger');

class UrzasAvenger extends UrzasAvengerBase {
  constructor (game) {
    super(game, "Urza's Avenger", 'Fourth Edition', '4ED');
  }
}

module.exports = UrzasAvenger;
