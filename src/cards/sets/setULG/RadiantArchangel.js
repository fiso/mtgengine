"use strict";
const Constants = require ("../../../Constants");
const RadiantArchangelBase = require("../setVMA/RadiantArchangel");

class RadiantArchangel extends RadiantArchangelBase {
  constructor (game) {
    super(game, "Radiant, Archangel", "Urza's Legacy", "ULG");
  }
}

module.exports = RadiantArchangel;
