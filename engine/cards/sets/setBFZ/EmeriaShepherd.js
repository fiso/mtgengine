"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EmeriaShepherd extends Card {
  constructor(game) {
    super(game, "Emeria Shepherd", "Battle for Zendikar", "BFZ");
  }
}

module.exports = EmeriaShepherd;
