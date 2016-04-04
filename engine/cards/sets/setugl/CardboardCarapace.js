"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CardboardCarapace extends UnimplementedCard {
  constructor(game) {
    super(game, "Cardboard Carapace", "Unglued", "UGL");
  }
}

module.exports = CardboardCarapace;
