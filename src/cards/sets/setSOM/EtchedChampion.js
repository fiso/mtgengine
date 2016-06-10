"use strict";
const Constants = require ("../../../Constants");
const EtchedChampionBase = require("../setMM2/EtchedChampion");

class EtchedChampion extends EtchedChampionBase {
  constructor (game) {
    super(game, "Etched Champion", "Scars of Mirrodin", "SOM");
  }
}

module.exports = EtchedChampion;
