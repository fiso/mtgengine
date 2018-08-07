"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BurntOffering extends UnimplementedCard {
  constructor (game) {
    super(game, "Burnt Offering", "You Make the Cube", "PZ2");
  }
}

module.exports = BurntOffering;
