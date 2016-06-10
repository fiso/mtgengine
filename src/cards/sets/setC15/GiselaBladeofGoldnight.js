"use strict";
const Constants = require ("../../../Constants");
const GiselaBladeofGoldnightBase = require("../setAVR/GiselaBladeofGoldnight");

class GiselaBladeofGoldnight extends GiselaBladeofGoldnightBase {
  constructor (game) {
    super(game, "Gisela, Blade of Goldnight", "Commander 2015", "C15");
  }
}

module.exports = GiselaBladeofGoldnight;
