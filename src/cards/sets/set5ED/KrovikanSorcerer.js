"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrovikanSorcerer extends UnimplementedCard {
  constructor (game) {
    super(game, "Krovikan Sorcerer", "Fifth Edition", "5ED");
  }
}

module.exports = KrovikanSorcerer;
