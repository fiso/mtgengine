"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FaithlessLooting extends UnimplementedCard {
  constructor (game) {
    super(game, "Faithless Looting", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = FaithlessLooting;
