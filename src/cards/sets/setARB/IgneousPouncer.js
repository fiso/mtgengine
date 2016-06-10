"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IgneousPouncer extends UnimplementedCard {
  constructor (game) {
    super(game, "Igneous Pouncer", "Alara Reborn", "ARB");
  }
}

module.exports = IgneousPouncer;
