"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinChieftainBase = require("../setM10/GoblinChieftain.js");

class GoblinChieftain extends GoblinChieftainBase {
  constructor(game) {
    super(game, "Goblin Chieftain", "Magic 2011", "M11");
  }
}

module.exports = GoblinChieftain;
