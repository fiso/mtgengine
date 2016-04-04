"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShatteredAngel extends Card {
  constructor(game) {
    super(game, "Shattered Angel", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = ShatteredAngel;
