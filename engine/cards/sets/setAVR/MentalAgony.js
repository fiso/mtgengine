"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MentalAgony extends UnimplementedCard {
  constructor(game) {
    super(game, "Mental Agony", "Avacyn Restored", "AVR");
  }
}

module.exports = MentalAgony;
