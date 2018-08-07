"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RainofTears extends UnimplementedCard {
  constructor (game) {
    super(game, "Rain of Tears", "Tenth Edition", "10E");
  }
}

module.exports = RainofTears;
