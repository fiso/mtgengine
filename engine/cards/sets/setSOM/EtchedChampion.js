"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EtchedChampionBase = require("../setMM2/EtchedChampion.js");

class EtchedChampion extends EtchedChampionBase {
  constructor(game) {
    super(game, "Etched Champion", "Scars of Mirrodin", "SOM");
  }
}

module.exports = EtchedChampion;
