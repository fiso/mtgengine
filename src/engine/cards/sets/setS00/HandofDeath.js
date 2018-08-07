"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HandofDeath extends UnimplementedCard {
  constructor (game) {
    super(game, "Hand of Death", "Starter 2000", "S00");
  }
}

module.exports = HandofDeath;
