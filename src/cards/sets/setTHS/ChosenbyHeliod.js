"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChosenbyHeliod extends UnimplementedCard {
  constructor (game) {
    super(game, "Chosen by Heliod", "Theros", "THS");
  }
}

module.exports = ChosenbyHeliod;
