"use strict";
const Constants = require ("../../../Constants");
const StormfrontPegasusBase = require("../setW17/StormfrontPegasus");

class StormfrontPegasus extends StormfrontPegasusBase {
  constructor (game) {
    super(game, "Stormfront Pegasus", "Magic 2010", "M10");
  }
}

module.exports = StormfrontPegasus;
