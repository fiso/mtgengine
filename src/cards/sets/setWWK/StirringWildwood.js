"use strict";
const Constants = require ("../../../Constants");
const StirringWildwoodBase = require("../setDDP/StirringWildwood");

class StirringWildwood extends StirringWildwoodBase {
  constructor (game) {
    super(game, "Stirring Wildwood", "Worldwake", "WWK");
  }
}

module.exports = StirringWildwood;
