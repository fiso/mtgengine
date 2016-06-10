"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Convolute extends UnimplementedCard {
  constructor (game) {
    super(game, "Convolute", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Convolute;
