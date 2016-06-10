"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RainofTears extends UnimplementedCard {
  constructor (game) {
    super(game, "Rain of Tears", "Mercadian Masques", "MMQ");
  }
}

module.exports = RainofTears;
