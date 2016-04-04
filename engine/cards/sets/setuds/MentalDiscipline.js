"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MentalDiscipline extends Card {
  constructor(game) {
    super(game, "Mental Discipline", "Urza's Destiny", "UDS");
  }
}

module.exports = MentalDiscipline;
