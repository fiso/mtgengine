"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VolcanicHammer extends UnimplementedCard {
  constructor (game) {
    super(game, "Volcanic Hammer", "Ninth Edition", "9ED");
  }
}

module.exports = VolcanicHammer;
