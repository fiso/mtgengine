"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnholyFiend extends UnimplementedCard {
  constructor (game) {
    super(game, "Unholy Fiend", "Innistrad", "ISD");
  }
}

module.exports = UnholyFiend;
