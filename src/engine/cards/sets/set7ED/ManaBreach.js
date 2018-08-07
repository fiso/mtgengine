"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaBreach extends UnimplementedCard {
  constructor (game) {
    super(game, "Mana Breach", "Seventh Edition", "7ED");
  }
}

module.exports = ManaBreach;
