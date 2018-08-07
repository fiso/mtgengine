"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HighGround extends UnimplementedCard {
  constructor (game) {
    super(game, "High Ground", "Tenth Edition", "10E");
  }
}

module.exports = HighGround;
