"use strict";
const Constants = require ("../../../Constants");
const GoblinTunnelerBase = require("../setDDT/GoblinTunneler");

class GoblinTunneler extends GoblinTunnelerBase {
  constructor (game) {
    super(game, "Goblin Tunneler", "Magic 2011", "M11");
  }
}

module.exports = GoblinTunneler;
