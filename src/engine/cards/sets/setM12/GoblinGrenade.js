"use strict";
const Constants = require ("../../../Constants");
const GoblinGrenadeBase = require("../setMTGA/GoblinGrenade");

class GoblinGrenade extends GoblinGrenadeBase {
  constructor (game) {
    super(game, "Goblin Grenade", "Magic 2012", "M12");
  }
}

module.exports = GoblinGrenade;
