"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IncursionSpecialist extends UnimplementedCard {
  constructor (game) {
    super(game, "Incursion Specialist", "Gatecrash", "GTC");
  }
}

module.exports = IncursionSpecialist;
