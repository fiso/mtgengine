"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MentalAgony extends Card {
  constructor(game) {
    super(game, "Mental Agony", "Avacyn Restored", "AVR");
  }
}

module.exports = MentalAgony;
