"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KaisoMemoryofLoyalty extends Card {
  constructor(game) {
    super(game, "Kaiso, Memory of Loyalty", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = KaisoMemoryofLoyalty;
