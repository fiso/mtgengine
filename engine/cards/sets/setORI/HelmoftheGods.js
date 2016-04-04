"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HelmoftheGods extends Card {
  constructor(game) {
    super(game, "Helm of the Gods", "Magic Origins", "ORI");
  }
}

module.exports = HelmoftheGods;
