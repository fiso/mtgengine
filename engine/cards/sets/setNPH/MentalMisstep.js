"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MentalMisstep extends UnimplementedCard {
  constructor(game) {
    super(game, "Mental Misstep", "New Phyrexia", "NPH");
  }
}

module.exports = MentalMisstep;
