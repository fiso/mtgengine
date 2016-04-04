"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinRaiderBase = require("../set8ED/GoblinRaider.js");

class GoblinRaider extends GoblinRaiderBase {
  constructor(game) {
    super(game, "Goblin Raider", "Portal Second Age", "PO2");
  }
}

module.exports = GoblinRaider;
