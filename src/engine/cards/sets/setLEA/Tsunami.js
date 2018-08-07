"use strict";
const Constants = require ("../../../Constants");
const TsunamiBase = require("../setME4/Tsunami");

class Tsunami extends TsunamiBase {
  constructor (game) {
    super(game, "Tsunami", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Tsunami;
