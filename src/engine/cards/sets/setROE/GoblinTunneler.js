"use strict";
const Constants = require ("../../../Constants");
const GoblinTunnelerBase = require("../setDDT/GoblinTunneler");

class GoblinTunneler extends GoblinTunnelerBase {
  constructor (game) {
    super(game, "Goblin Tunneler", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = GoblinTunneler;
