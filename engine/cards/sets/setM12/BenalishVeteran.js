"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BenalishVeteran extends UnimplementedCard {
  constructor(game) {
    super(game, "Benalish Veteran", "Magic 2012", "M12");
  }
}

module.exports = BenalishVeteran;
