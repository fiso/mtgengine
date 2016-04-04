"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Aggravate extends UnimplementedCard {
  constructor(game) {
    super(game, "Aggravate", "Avacyn Restored", "AVR");
  }
}

module.exports = Aggravate;
