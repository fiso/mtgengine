"use strict";
const Constants = require ("../../../Constants");
const GravebornMuseBase = require("../set10E/GravebornMuse");

class GravebornMuse extends GravebornMuseBase {
  constructor (game) {
    super(game, "Graveborn Muse", "Legions", "LGN");
  }
}

module.exports = GravebornMuse;
