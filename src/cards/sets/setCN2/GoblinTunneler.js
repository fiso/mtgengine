"use strict";
const Constants = require ("../../../Constants");
const GoblinTunnelerBase = require("../setDDT/GoblinTunneler");

class GoblinTunneler extends GoblinTunnelerBase {
  constructor (game) {
    super(game, "Goblin Tunneler", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = GoblinTunneler;
