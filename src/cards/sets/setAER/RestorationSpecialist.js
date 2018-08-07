"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RestorationSpecialist extends UnimplementedCard {
  constructor (game) {
    super(game, "Restoration Specialist", "Aether Revolt", "AER");
  }
}

module.exports = RestorationSpecialist;
