"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WasteNot extends Card {
  constructor(game) {
    super(game, "Waste Not", "Magic 2015 Core Set", "M15");
  }
}

module.exports = WasteNot;
