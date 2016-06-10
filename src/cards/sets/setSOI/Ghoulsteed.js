"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ghoulsteed extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghoulsteed", "Shadows over Innistrad", "SOI");
  }
}

module.exports = Ghoulsteed;
