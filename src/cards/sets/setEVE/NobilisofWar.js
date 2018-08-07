"use strict";
const Constants = require ("../../../Constants");
const NobilisofWarBase = require("../setMM2/NobilisofWar");

class NobilisofWar extends NobilisofWarBase {
  constructor (game) {
    super(game, "Nobilis of War", "Eventide", "EVE");
  }
}

module.exports = NobilisofWar;
