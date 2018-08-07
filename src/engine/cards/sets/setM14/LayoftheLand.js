"use strict";
const Constants = require ("../../../Constants");
const LayoftheLandBase = require("../setCN2/LayoftheLand");

class LayoftheLand extends LayoftheLandBase {
  constructor (game) {
    super(game, "Lay of the Land", "Magic 2014", "M14");
  }
}

module.exports = LayoftheLand;
