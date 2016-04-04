"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinArsonistBase = require("../setDDK/GoblinArsonist.js");

class GoblinArsonist extends GoblinArsonistBase {
  constructor(game) {
    super(game, "Goblin Arsonist", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = GoblinArsonist;
