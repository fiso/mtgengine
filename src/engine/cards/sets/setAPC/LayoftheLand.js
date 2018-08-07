"use strict";
const Constants = require ("../../../Constants");
const LayoftheLandBase = require("../setCN2/LayoftheLand");

class LayoftheLand extends LayoftheLandBase {
  constructor (game) {
    super(game, "Lay of the Land", "Apocalypse", "APC");
  }
}

module.exports = LayoftheLand;
