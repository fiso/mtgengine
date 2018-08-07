"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NorwoodRanger extends UnimplementedCard {
  constructor (game) {
    super(game, "Norwood Ranger", "Ninth Edition", "9ED");
  }
}

module.exports = NorwoodRanger;
