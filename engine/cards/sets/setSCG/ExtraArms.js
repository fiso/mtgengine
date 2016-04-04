"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ExtraArms extends Card {
  constructor(game) {
    super(game, "Extra Arms", "Scourge", "SCG");
  }
}

module.exports = ExtraArms;
