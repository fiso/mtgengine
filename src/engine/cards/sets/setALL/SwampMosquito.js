"use strict";
const Constants = require ("../../../Constants");
const SwampMosquitoBase = require("../setTSB/SwampMosquito");

class SwampMosquito extends SwampMosquitoBase {
  constructor (game) {
    super(game, "Swamp Mosquito", "Alliances", "ALL");
  }
}

module.exports = SwampMosquito;
