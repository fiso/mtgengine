"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DanceofPanic extends UnimplementedCard {
  constructor (game) {
    super(game, "Dance of Panic", "Defeat a God", "TDAG");
  }
}

module.exports = DanceofPanic;
