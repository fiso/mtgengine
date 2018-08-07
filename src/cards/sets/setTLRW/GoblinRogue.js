"use strict";
const Constants = require ("../../../Constants");
const GoblinRogueBase = require("../setTMMA/GoblinRogue");

class GoblinRogue extends GoblinRogueBase {
  constructor (game) {
    super(game, "Goblin Rogue", "Lorwyn Tokens", "TLRW");
  }
}

module.exports = GoblinRogue;
