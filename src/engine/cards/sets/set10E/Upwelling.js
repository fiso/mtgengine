"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Upwelling extends UnimplementedCard {
  constructor (game) {
    super(game, "Upwelling", "Tenth Edition", "10E");
  }
}

module.exports = Upwelling;
