"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SigardaHeronsGrace extends UnimplementedCard {
  constructor (game) {
    super(game, "Sigarda, Heron's Grace", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SigardaHeronsGrace;
