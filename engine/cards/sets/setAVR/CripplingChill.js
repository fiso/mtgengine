"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CripplingChill extends UnimplementedCard {
  constructor(game) {
    super(game, "Crippling Chill", "Avacyn Restored", "AVR");
  }
}

module.exports = CripplingChill;
