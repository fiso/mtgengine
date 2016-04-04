"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinMountaineerBase = require("../set9ED/GoblinMountaineer.js");

class GoblinMountaineer extends GoblinMountaineerBase {
  constructor(game) {
    super(game, "Goblin Mountaineer", "Portal Second Age", "PO2");
  }
}

module.exports = GoblinMountaineer;
