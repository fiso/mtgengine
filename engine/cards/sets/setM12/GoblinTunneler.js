"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinTunnelerBase = require("../setM11/GoblinTunneler.js");

class GoblinTunneler extends GoblinTunnelerBase {
  constructor(game) {
    super(game, "Goblin Tunneler", "Magic 2012", "M12");
  }
}

module.exports = GoblinTunneler;
