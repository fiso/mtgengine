'use strict';
const Constants = require('../../../Constants');
const AuriokChampionBase = require('../setIMA/AuriokChampion');

class AuriokChampion extends AuriokChampionBase {
  constructor (game) {
    super(game, 'Auriok Champion', 'Fifth Dawn', '5DN');
  }
}

module.exports = AuriokChampion;
