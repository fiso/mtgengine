"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DragonBroodmotherBase = require("../setARB/DragonBroodmother.js");

class DragonBroodmother extends DragonBroodmotherBase {
  constructor(game) {
    super(game, "Dragon Broodmother", "Prerelease Events", "pPRE");
  }
}

module.exports = DragonBroodmother;
