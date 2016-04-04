"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinShrineBase = require("../setCHR/GoblinShrine.js");

class GoblinShrine extends GoblinShrineBase {
  constructor(game) {
    super(game, "Goblin Shrine", "Masters Edition IV", "ME4");
  }
}

module.exports = GoblinShrine;
