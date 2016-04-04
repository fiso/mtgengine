"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Vaporkin extends Card {
  constructor(game) {
    super(game, "Vaporkin", "Theros", "THS");
  }
}

module.exports = Vaporkin;
