"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WildwoodGeist extends Card {
  constructor(game) {
    super(game, "Wildwood Geist", "Avacyn Restored", "AVR");
  }
}

module.exports = WildwoodGeist;
