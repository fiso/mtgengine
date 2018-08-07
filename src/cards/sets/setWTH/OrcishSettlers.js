"use strict";
const Constants = require ("../../../Constants");
const OrcishSettlersBase = require("../setWC98/OrcishSettlers");

class OrcishSettlers extends OrcishSettlersBase {
  constructor (game) {
    super(game, "Orcish Settlers", "Weatherlight", "WTH");
  }
}

module.exports = OrcishSettlers;
