"use strict";
const Constants = require ("../../../Constants");
const TsunamiBase = require("../setCED/Tsunami");

class Tsunami extends TsunamiBase {
  constructor (game) {
    super(game, "Tsunami", "Masters Edition IV", "ME4");
  }
}

module.exports = Tsunami;
