"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FireServant extends UnimplementedCard {
  constructor (game) {
    super(game, "Fire Servant", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = FireServant;
