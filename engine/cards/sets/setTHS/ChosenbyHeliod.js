"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChosenbyHeliod extends Card {
  constructor(game) {
    super(game, "Chosen by Heliod", "Theros", "THS");
  }
}

module.exports = ChosenbyHeliod;
