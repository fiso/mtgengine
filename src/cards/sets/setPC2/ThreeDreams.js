"use strict";
const Constants = require ("../../../Constants");
const ThreeDreamsBase = require("../setPCA/ThreeDreams");

class ThreeDreams extends ThreeDreamsBase {
  constructor (game) {
    super(game, "Three Dreams", "Planechase 2012", "PC2");
  }
}

module.exports = ThreeDreams;
