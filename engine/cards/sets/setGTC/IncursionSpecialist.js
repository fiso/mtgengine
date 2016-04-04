"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IncursionSpecialist extends Card {
  constructor(game) {
    super(game, "Incursion Specialist", "Gatecrash", "GTC");
  }
}

module.exports = IncursionSpecialist;
