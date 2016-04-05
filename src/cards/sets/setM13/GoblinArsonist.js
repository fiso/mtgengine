"use strict";
const Constants = require ("../../../Constants");
const GoblinArsonistBase = require("../setDDK/GoblinArsonist");

class GoblinArsonist extends GoblinArsonistBase {
  constructor(game) {
    super(game, "Goblin Arsonist", "Magic 2013", "M13");
  }
}

module.exports = GoblinArsonist;
