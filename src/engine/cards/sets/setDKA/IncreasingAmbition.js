"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IncreasingAmbition extends UnimplementedCard {
  constructor (game) {
    super(game, "Increasing Ambition", "Dark Ascension", "DKA");
  }
}

module.exports = IncreasingAmbition;
