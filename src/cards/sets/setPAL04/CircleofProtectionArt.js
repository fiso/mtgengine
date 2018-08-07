"use strict";
const Constants = require ("../../../Constants");
const CircleofProtectionArtBase = require("../setUNH/CircleofProtectionArt");

class CircleofProtectionArt extends CircleofProtectionArtBase {
  constructor (game) {
    super(game, "Circle of Protection: Art", "Arena League 2004", "PAL04");
  }
}

module.exports = CircleofProtectionArt;
