"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AncientStirrings extends Card {
  constructor(game) {
    super(game, "Ancient Stirrings", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = AncientStirrings;
