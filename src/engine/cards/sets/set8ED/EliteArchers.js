"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EliteArchers extends UnimplementedCard {
  constructor (game) {
    super(game, "Elite Archers", "Eighth Edition", "8ED");
  }
}

module.exports = EliteArchers;
