'use strict';
const Constants = require('../../../Constants');
const MerfolkofthePearlTridentBase = require('../setM13/MerfolkofthePearlTrident');

class MerfolkofthePearlTrident extends MerfolkofthePearlTridentBase {
  constructor (game) {
    super(game, 'Merfolk of the Pearl Trident', 'Revised Edition', '3ED');
  }
}

module.exports = MerfolkofthePearlTrident;
