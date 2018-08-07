"use strict";
const Constants = require ("../../../Constants");
const StirringWildwoodBase = require("../setC17/StirringWildwood");

class StirringWildwood extends StirringWildwoodBase {
  constructor (game) {
    super(game, "Stirring Wildwood", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = StirringWildwood;
