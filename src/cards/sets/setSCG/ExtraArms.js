"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExtraArms extends UnimplementedCard {
  constructor(game) {
    super(game, "Extra Arms", "Scourge", "SCG");
  }
}

module.exports = ExtraArms;
