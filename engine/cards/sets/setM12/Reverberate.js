"use strict";
const Constants = require ("../../../Constants");
const ReverberateBase = require("../setM11/Reverberate");

class Reverberate extends ReverberateBase {
  constructor(game) {
    super(game, "Reverberate", "Magic 2012", "M12");
  }
}

module.exports = Reverberate;
