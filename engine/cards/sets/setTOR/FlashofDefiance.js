"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlashofDefiance extends Card {
  constructor(game) {
    super(game, "Flash of Defiance", "Torment", "TOR");
  }
}

module.exports = FlashofDefiance;
