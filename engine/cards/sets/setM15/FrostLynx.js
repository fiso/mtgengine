"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FrostLynx extends Card {
  constructor(game) {
    super(game, "Frost Lynx", "Magic 2015 Core Set", "M15");
  }
}

module.exports = FrostLynx;
