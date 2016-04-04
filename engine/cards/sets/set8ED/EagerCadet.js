"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EagerCadet extends UnimplementedCard {
  constructor(game) {
    super(game, "Eager Cadet", "Eighth Edition", "8ED");
  }
}

module.exports = EagerCadet;
