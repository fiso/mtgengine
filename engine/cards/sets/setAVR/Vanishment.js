"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Vanishment extends UnimplementedCard {
  constructor(game) {
    super(game, "Vanishment", "Avacyn Restored", "AVR");
  }
}

module.exports = Vanishment;
