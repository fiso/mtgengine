"use strict";
const Constants = require ("../../../Constants");
const NoxiousDragonBase = require("../setBBD/NoxiousDragon");

class NoxiousDragon extends NoxiousDragonBase {
  constructor (game) {
    super(game, "Noxious Dragon", "Fate Reforged", "FRF");
  }
}

module.exports = NoxiousDragon;
