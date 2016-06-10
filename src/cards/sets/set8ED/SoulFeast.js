"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulFeast extends UnimplementedCard {
  constructor (game) {
    super(game, "Soul Feast", "Eighth Edition", "8ED");
  }
}

module.exports = SoulFeast;
