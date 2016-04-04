"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FateUnraveler extends Card {
  constructor(game) {
    super(game, "Fate Unraveler", "Born of the Gods", "BNG");
  }
}

module.exports = FateUnraveler;
