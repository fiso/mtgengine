"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinCavaliersBase = require("../setME4/GoblinCavaliers.js");

class GoblinCavaliers extends GoblinCavaliersBase {
  constructor(game) {
    super(game, "Goblin Cavaliers", "Starter 1999", "S99");
  }
}

module.exports = GoblinCavaliers;
