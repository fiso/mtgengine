"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HuntingPack extends Card {
  constructor(game) {
    super(game, "Hunting Pack", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = HuntingPack;
