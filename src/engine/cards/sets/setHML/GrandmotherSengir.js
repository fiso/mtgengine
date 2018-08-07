"use strict";
const Constants = require ("../../../Constants");
const GrandmotherSengirBase = require("../setME2/GrandmotherSengir");

class GrandmotherSengir extends GrandmotherSengirBase {
  constructor (game) {
    super(game, "Grandmother Sengir", "Homelands", "HML");
  }
}

module.exports = GrandmotherSengir;
