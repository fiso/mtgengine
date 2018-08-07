"use strict";
const Constants = require ("../../../Constants");
const FellwarStoneBase = require("../setCM2/FellwarStone");

class FellwarStone extends FellwarStoneBase {
  constructor (game) {
    super(game, "Fellwar Stone", "Pro Tour Collector Set", "PTC");
  }
}

module.exports = FellwarStone;
