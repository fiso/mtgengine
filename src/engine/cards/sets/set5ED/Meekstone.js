'use strict';
const Constants = require('../../../Constants');
const MeekstoneBase = require('../setMPS/Meekstone');

class Meekstone extends MeekstoneBase {
  constructor (game) {
    super(game, 'Meekstone', 'Fifth Edition', '5ED');
  }
}

module.exports = Meekstone;
