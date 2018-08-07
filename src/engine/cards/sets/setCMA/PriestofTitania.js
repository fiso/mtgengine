"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PriestofTitania extends UnimplementedCard {
  constructor (game) {
    super(game, "Priest of Titania", "Commander Anthology", "CMA");
  }
}

module.exports = PriestofTitania;
