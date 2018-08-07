"use strict";
const Constants = require ("../../../Constants");
const GiselaBladeofGoldnightBase = require("../setCM2/GiselaBladeofGoldnight");

class GiselaBladeofGoldnight extends GiselaBladeofGoldnightBase {
  constructor (game) {
    super(game, "Gisela, Blade of Goldnight", "Open the Helvault", "PHEL");
  }
}

module.exports = GiselaBladeofGoldnight;
