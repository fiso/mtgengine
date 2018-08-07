"use strict";
const Constants = require ("../../../Constants");
const NoxiousDragonBase = require("../setBBD/NoxiousDragon");

class NoxiousDragon extends NoxiousDragonBase {
  constructor (game) {
    super(game, "Noxious Dragon", "Iconic Masters", "IMA");
  }
}

module.exports = NoxiousDragon;
