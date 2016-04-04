"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StirringWildwoodBase = require("../setDDP/StirringWildwood.js");

class StirringWildwood extends StirringWildwoodBase {
  constructor(game) {
    super(game, "Stirring Wildwood", "Worldwake", "WWK");
  }
}

module.exports = StirringWildwood;
