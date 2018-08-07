"use strict";
const Constants = require ("../../../Constants");
const UpwellingBase = require("../set10E/Upwelling");

class Upwelling extends UpwellingBase {
  constructor (game) {
    super(game, "Upwelling", "Scourge", "SCG");
  }
}

module.exports = Upwelling;
