"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MentalMisstep extends Card {
  constructor(game) {
    super(game, "Mental Misstep", "New Phyrexia", "NPH");
  }
}

module.exports = MentalMisstep;
