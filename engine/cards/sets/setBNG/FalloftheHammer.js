"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FalloftheHammer extends Card {
  constructor(game) {
    super(game, "Fall of the Hammer", "Born of the Gods", "BNG");
  }
}

module.exports = FalloftheHammer;
