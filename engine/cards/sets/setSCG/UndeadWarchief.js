"use strict";
const Constants = require ("../../../Constants");
const UndeadWarchiefBase = require("../setHOP/UndeadWarchief");

class UndeadWarchief extends UndeadWarchiefBase {
  constructor(game) {
    super(game, "Undead Warchief", "Scourge", "SCG");
  }
}

module.exports = UndeadWarchief;
