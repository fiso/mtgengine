"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NorwoodRanger extends UnimplementedCard {
  constructor(game) {
    super(game, "Norwood Ranger", "Eighth Edition", "8ED");
  }
}

module.exports = NorwoodRanger;
