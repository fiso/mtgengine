"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BrightstoneRitual extends Card {
  constructor(game) {
    super(game, "Brightstone Ritual", "Onslaught", "ONS");
  }
}

module.exports = BrightstoneRitual;
