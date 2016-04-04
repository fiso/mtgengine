"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RousetheMob extends Card {
  constructor(game) {
    super(game, "Rouse the Mob", "Journey into Nyx", "JOU");
  }
}

module.exports = RousetheMob;
