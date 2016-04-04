"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GhostLitRaiderBase = require("../setpREL/GhostLitRaider.js");

class GhostLitRaider extends GhostLitRaiderBase {
  constructor(game) {
    super(game, "Ghost-Lit Raider", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = GhostLitRaider;
