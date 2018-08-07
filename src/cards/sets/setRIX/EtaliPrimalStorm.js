"use strict";
const Constants = require ("../../../Constants");
const EtaliPrimalStormBase = require("../setPRIX/EtaliPrimalStorm");

class EtaliPrimalStorm extends EtaliPrimalStormBase {
  constructor (game) {
    super(game, "Etali, Primal Storm", "Rivals of Ixalan", "RIX");
  }
}

module.exports = EtaliPrimalStorm;
