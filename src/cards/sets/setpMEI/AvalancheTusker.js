"use strict";
const Constants = require ("../../../Constants");
const AvalancheTuskerBase = require("../setKTK/AvalancheTusker");

class AvalancheTusker extends AvalancheTuskerBase {
  constructor(game) {
    super(game, "Avalanche Tusker", "Media Inserts", "pMEI");
  }
}

module.exports = AvalancheTusker;
