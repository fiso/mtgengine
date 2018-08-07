"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AirServant extends UnimplementedCard {
  constructor (game) {
    super(game, "Air Servant", "Welcome Deck 2016", "W16");
  }
}

module.exports = AirServant;
