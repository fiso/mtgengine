"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BenalishVeteran extends Card {
  constructor(game) {
    super(game, "Benalish Veteran", "Magic 2012", "M12");
  }
}

module.exports = BenalishVeteran;
