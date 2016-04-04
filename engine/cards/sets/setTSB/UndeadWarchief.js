"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UndeadWarchiefBase = require("../setHOP/UndeadWarchief.js");

class UndeadWarchief extends UndeadWarchiefBase {
  constructor(game) {
    super(game, "Undead Warchief", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = UndeadWarchief;
