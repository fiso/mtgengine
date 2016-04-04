"use strict";
const Constants = require ("../../../Constants");
const HellraiserGoblinBase = require("../setDDN/HellraiserGoblin");

class HellraiserGoblin extends HellraiserGoblinBase {
  constructor(game) {
    super(game, "Hellraiser Goblin", "Gatecrash", "GTC");
  }
}

module.exports = HellraiserGoblin;
