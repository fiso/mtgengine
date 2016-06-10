"use strict";
const Constants = require ("../../../Constants");
const StormfrontPegasusBase = require("../setM10/StormfrontPegasus");

class StormfrontPegasus extends StormfrontPegasusBase {
  constructor (game) {
    super(game, "Stormfront Pegasus", "Magic 2012", "M12");
  }
}

module.exports = StormfrontPegasus;
