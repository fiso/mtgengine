"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BenalishHeralds extends UnimplementedCard {
  constructor(game) {
    super(game, "Benalish Heralds", "Invasion", "INV");
  }
}

module.exports = BenalishHeralds;
