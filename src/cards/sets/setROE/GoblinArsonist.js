"use strict";
const Constants = require ("../../../Constants");
const GoblinArsonistBase = require("../setDDK/GoblinArsonist");

class GoblinArsonist extends GoblinArsonistBase {
  constructor (game) {
    super(game, "Goblin Arsonist", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = GoblinArsonist;
