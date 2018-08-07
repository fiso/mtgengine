"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SureStrike extends UnimplementedCard {
  constructor (game) {
    super(game, "Sure Strike", "Core Set 2019", "M19");
  }
}

module.exports = SureStrike;
