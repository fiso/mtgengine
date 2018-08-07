"use strict";
const Constants = require ("../../../Constants");
const OrimsThunderBase = require("../setCM2/OrimsThunder");

class OrimsThunder extends OrimsThunderBase {
  constructor (game) {
    super(game, "Orim's Thunder", "Apocalypse", "APC");
  }
}

module.exports = OrimsThunder;
