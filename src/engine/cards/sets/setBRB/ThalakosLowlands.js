"use strict";
const Constants = require ("../../../Constants");
const ThalakosLowlandsBase = require("../setTPR/ThalakosLowlands");

class ThalakosLowlands extends ThalakosLowlandsBase {
  constructor (game) {
    super(game, "Thalakos Lowlands", "Battle Royale Box Set", "BRB");
  }
}

module.exports = ThalakosLowlands;
