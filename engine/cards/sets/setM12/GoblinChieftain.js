"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinChieftainBase = require("../setM10/GoblinChieftain.js");

class GoblinChieftain extends GoblinChieftainBase {
  constructor(game) {
    super(game, "Goblin Chieftain", "Magic 2012", "M12");
  }
}

module.exports = GoblinChieftain;
