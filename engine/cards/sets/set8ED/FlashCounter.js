"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlashCounter extends UnimplementedCard {
  constructor(game) {
    super(game, "Flash Counter", "Eighth Edition", "8ED");
  }
}

module.exports = FlashCounter;
