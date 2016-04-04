"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SlashingTiger extends Card {
  constructor(game) {
    super(game, "Slashing Tiger", "Masters Edition III", "ME3");
  }
}

module.exports = SlashingTiger;
