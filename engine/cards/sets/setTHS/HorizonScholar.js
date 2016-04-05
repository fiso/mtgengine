"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HorizonScholar extends UnimplementedCard {
  constructor(game) {
    super(game, "Horizon Scholar", "Theros", "THS");
  }
}

module.exports = HorizonScholar;
