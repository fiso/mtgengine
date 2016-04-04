"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BorderlandMarauder extends Card {
  constructor(game) {
    super(game, "Borderland Marauder", "Magic 2015 Core Set", "M15");
  }
}

module.exports = BorderlandMarauder;
