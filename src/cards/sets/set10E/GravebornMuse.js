"use strict";
const Constants = require ("../../../Constants");
const GravebornMuseBase = require("../setLGN/GravebornMuse");

class GravebornMuse extends GravebornMuseBase {
  constructor (game) {
    super(game, "Graveborn Muse", "Tenth Edition", "10E");
  }
}

module.exports = GravebornMuse;
