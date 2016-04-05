"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MentalDiscipline extends UnimplementedCard {
  constructor(game) {
    super(game, "Mental Discipline", "Urza's Destiny", "UDS");
  }
}

module.exports = MentalDiscipline;
