"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Overrun extends UnimplementedCard {
  constructor(game) {
    super(game, "Overrun", "Anthologies", "ATH");
  }
}

module.exports = Overrun;
