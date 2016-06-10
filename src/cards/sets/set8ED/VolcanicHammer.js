"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VolcanicHammer extends UnimplementedCard {
  constructor (game) {
    super(game, "Volcanic Hammer", "Eighth Edition", "8ED");
  }
}

module.exports = VolcanicHammer;
