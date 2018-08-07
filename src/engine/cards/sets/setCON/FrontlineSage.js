"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrontlineSage extends UnimplementedCard {
  constructor (game) {
    super(game, "Frontline Sage", "Conflux", "CON");
  }
}

module.exports = FrontlineSage;
