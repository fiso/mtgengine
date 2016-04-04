"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinArsonistBase = require("../setDDK/GoblinArsonist.js");

class GoblinArsonist extends GoblinArsonistBase {
  constructor(game) {
    super(game, "Goblin Arsonist", "Magic 2013", "M13");
  }
}

module.exports = GoblinArsonist;
