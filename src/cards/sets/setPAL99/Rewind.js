"use strict";
const Constants = require ("../../../Constants");
const RewindBase = require("../setMM3/Rewind");

class Rewind extends RewindBase {
  constructor (game) {
    super(game, "Rewind", "Arena League 1999", "PAL99");
  }
}

module.exports = Rewind;
