"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DanceoftheDead extends UnimplementedCard {
  constructor (game) {
    super(game, "Dance of the Dead", "Ice Age", "ICE");
  }
}

module.exports = DanceoftheDead;
