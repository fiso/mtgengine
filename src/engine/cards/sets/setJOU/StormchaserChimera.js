"use strict";
const Constants = require ("../../../Constants");
const StormchaserChimeraBase = require("../setCN2/StormchaserChimera");

class StormchaserChimera extends StormchaserChimeraBase {
  constructor (game) {
    super(game, "Stormchaser Chimera", "Journey into Nyx", "JOU");
  }
}

module.exports = StormchaserChimera;
