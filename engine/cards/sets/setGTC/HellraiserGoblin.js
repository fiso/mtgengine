"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HellraiserGoblinBase = require("../setDDN/HellraiserGoblin.js");

class HellraiserGoblin extends HellraiserGoblinBase {
  constructor(game) {
    super(game, "Hellraiser Goblin", "Gatecrash", "GTC");
  }
}

module.exports = HellraiserGoblin;
