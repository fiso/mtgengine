"use strict";
const Constants = require ("../../../Constants");
const GoblinGrenadeBase = require("../setATH/GoblinGrenade");

class GoblinGrenade extends GoblinGrenadeBase {
  constructor(game) {
    super(game, "Goblin Grenade", "Fallen Empires", "FEM");
  }
}

module.exports = GoblinGrenade;
