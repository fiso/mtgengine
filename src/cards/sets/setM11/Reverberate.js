"use strict";
const Constants = require ("../../../Constants");
const ReverberateBase = require("../setM13/Reverberate");

class Reverberate extends ReverberateBase {
  constructor (game) {
    super(game, "Reverberate", "Magic 2011", "M11");
  }
}

module.exports = Reverberate;
