"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BurntOffering extends UnimplementedCard {
  constructor (game) {
    super(game, "Burnt Offering", "Ice Age", "ICE");
  }
}

module.exports = BurntOffering;
