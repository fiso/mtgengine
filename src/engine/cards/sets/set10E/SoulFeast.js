"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulFeast extends UnimplementedCard {
  constructor (game) {
    super(game, "Soul Feast", "Tenth Edition", "10E");
  }
}

module.exports = SoulFeast;
