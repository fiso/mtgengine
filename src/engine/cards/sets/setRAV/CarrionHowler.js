"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarrionHowler extends UnimplementedCard {
  constructor (game) {
    super(game, "Carrion Howler", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = CarrionHowler;
