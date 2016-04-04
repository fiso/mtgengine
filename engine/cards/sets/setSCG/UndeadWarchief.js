"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UndeadWarchiefBase = require("../setHOP/UndeadWarchief.js");

class UndeadWarchief extends UndeadWarchiefBase {
  constructor(game) {
    super(game, "Undead Warchief", "Scourge", "SCG");
  }
}

module.exports = UndeadWarchief;
