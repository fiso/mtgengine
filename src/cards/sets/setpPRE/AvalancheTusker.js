"use strict";
const Constants = require ("../../../Constants");
const AvalancheTuskerBase = require("../setKTK/AvalancheTusker");

class AvalancheTusker extends AvalancheTuskerBase {
  constructor (game) {
    super(game, "Avalanche Tusker", "Prerelease Events", "pPRE");
  }
}

module.exports = AvalancheTusker;
