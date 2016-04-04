"use strict";
const Constants = require ("../../../Constants");
const LavabornMuseBase = require("../setDDK/LavabornMuse");

class LavabornMuse extends LavabornMuseBase {
  constructor(game) {
    super(game, "Lavaborn Muse", "Legions", "LGN");
  }
}

module.exports = LavabornMuse;
