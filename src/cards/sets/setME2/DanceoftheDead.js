"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DanceoftheDead extends UnimplementedCard {
  constructor (game) {
    super(game, "Dance of the Dead", "Masters Edition II", "ME2");
  }
}

module.exports = DanceoftheDead;
