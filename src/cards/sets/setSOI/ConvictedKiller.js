"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConvictedKiller extends UnimplementedCard {
  constructor (game) {
    super(game, "Convicted Killer", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ConvictedKiller;
