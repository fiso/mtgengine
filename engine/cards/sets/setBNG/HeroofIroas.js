"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeroofIroas extends Card {
  constructor(game) {
    super(game, "Hero of Iroas", "Born of the Gods", "BNG");
  }
}

module.exports = HeroofIroas;
