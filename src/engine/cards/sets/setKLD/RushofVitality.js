"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RushofVitality extends UnimplementedCard {
  constructor (game) {
    super(game, "Rush of Vitality", "Kaladesh", "KLD");
  }
}

module.exports = RushofVitality;
