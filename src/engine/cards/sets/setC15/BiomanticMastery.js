"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BiomanticMastery extends UnimplementedCard {
  constructor (game) {
    super(game, "Biomantic Mastery", "Commander 2015", "C15");
  }
}

module.exports = BiomanticMastery;
