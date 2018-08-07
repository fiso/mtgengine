"use strict";
const Constants = require ("../../../Constants");
const SilenceBase = require("../setM14/Silence");

class Silence extends SilenceBase {
  constructor (game) {
    super(game, "Silence", "Magic 2010", "M10");
  }
}

module.exports = Silence;
