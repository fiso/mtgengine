"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KozileksChanneler extends Card {
  constructor(game) {
    super(game, "Kozilek's Channeler", "Battle for Zendikar", "BFZ");
  }
}

module.exports = KozileksChanneler;
