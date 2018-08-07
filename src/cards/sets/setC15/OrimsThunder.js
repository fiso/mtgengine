"use strict";
const Constants = require ("../../../Constants");
const OrimsThunderBase = require("../setCM2/OrimsThunder");

class OrimsThunder extends OrimsThunderBase {
  constructor (game) {
    super(game, "Orim's Thunder", "Commander 2015", "C15");
  }
}

module.exports = OrimsThunder;
