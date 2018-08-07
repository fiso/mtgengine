"use strict";
const Constants = require ("../../../Constants");
const RewindBase = require("../setMM3/Rewind");

class Rewind extends RewindBase {
  constructor (game) {
    super(game, "Rewind", "Magic 2013", "M13");
  }
}

module.exports = Rewind;
