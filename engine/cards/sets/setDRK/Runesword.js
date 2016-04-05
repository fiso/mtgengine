"use strict";
const Constants = require ("../../../Constants");
const RuneswordBase = require("../setCHR/Runesword");

class Runesword extends RuneswordBase {
  constructor(game) {
    super(game, "Runesword", "The Dark", "DRK");
  }
}

module.exports = Runesword;
