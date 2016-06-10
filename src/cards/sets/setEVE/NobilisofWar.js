"use strict";
const Constants = require ("../../../Constants");
const NobilisofWarBase = require("../setDDL/NobilisofWar");

class NobilisofWar extends NobilisofWarBase {
  constructor (game) {
    super(game, "Nobilis of War", "Eventide", "EVE");
  }
}

module.exports = NobilisofWar;
