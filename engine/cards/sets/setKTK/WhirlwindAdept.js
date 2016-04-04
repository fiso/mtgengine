"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WhirlwindAdept extends Card {
  constructor(game) {
    super(game, "Whirlwind Adept", "Khans of Tarkir", "KTK");
  }
}

module.exports = WhirlwindAdept;
