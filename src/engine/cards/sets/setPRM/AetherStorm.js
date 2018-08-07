"use strict";
const Constants = require ("../../../Constants");
const AetherStormBase = require("../setME2/AetherStorm");

class AetherStorm extends AetherStormBase {
  constructor (game) {
    super(game, "Aether Storm", "Magic Online Promos", "PRM");
  }
}

module.exports = AetherStorm;
