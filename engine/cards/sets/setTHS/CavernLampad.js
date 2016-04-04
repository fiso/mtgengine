"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CavernLampad extends Card {
  constructor(game) {
    super(game, "Cavern Lampad", "Theros", "THS");
  }
}

module.exports = CavernLampad;
