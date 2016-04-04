"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinGrenadeBase = require("../setATH/GoblinGrenade.js");

class GoblinGrenade extends GoblinGrenadeBase {
  constructor(game) {
    super(game, "Goblin Grenade", "Masters Edition", "MED");
  }
}

module.exports = GoblinGrenade;
