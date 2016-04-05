"use strict";
const Constants = require ("../../../Constants");
const GoblinGrenadeBase = require("../setATH/GoblinGrenade");

class GoblinGrenade extends GoblinGrenadeBase {
  constructor(game) {
    super(game, "Goblin Grenade", "Magic 2012", "M12");
  }
}

module.exports = GoblinGrenade;
