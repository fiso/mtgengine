"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WitheringBoon extends UnimplementedCard {
  constructor (game) {
    super(game, "Withering Boon", "Mirage", "MIR");
  }
}

module.exports = WitheringBoon;
