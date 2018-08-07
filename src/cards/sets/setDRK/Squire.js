"use strict";
const Constants = require ("../../../Constants");
const SquireBase = require("../setTSB/Squire");

class Squire extends SquireBase {
  constructor (game) {
    super(game, "Squire", "The Dark", "DRK");
  }
}

module.exports = Squire;
