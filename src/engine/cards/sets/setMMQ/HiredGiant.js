"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HiredGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Hired Giant", "Mercadian Masques", "MMQ");
  }
}

module.exports = HiredGiant;
