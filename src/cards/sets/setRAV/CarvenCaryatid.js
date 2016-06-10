"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarvenCaryatid extends UnimplementedCard {
  constructor (game) {
    super(game, "Carven Caryatid", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = CarvenCaryatid;
