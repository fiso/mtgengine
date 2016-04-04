"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KithkinRabble extends Card {
  constructor(game) {
    super(game, "Kithkin Rabble", "Shadowmoor", "SHM");
  }
}

module.exports = KithkinRabble;
