"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SureStrike extends UnimplementedCard {
  constructor(game) {
    super(game, "Sure Strike", "Battle for Zendikar", "BFZ");
  }
}

module.exports = SureStrike;
