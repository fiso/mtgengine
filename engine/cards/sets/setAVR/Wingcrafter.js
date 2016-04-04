"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Wingcrafter extends Card {
  constructor(game) {
    super(game, "Wingcrafter", "Avacyn Restored", "AVR");
  }
}

module.exports = Wingcrafter;
