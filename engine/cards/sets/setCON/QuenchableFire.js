"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuenchableFire extends UnimplementedCard {
  constructor(game) {
    super(game, "Quenchable Fire", "Conflux", "CON");
  }
}

module.exports = QuenchableFire;
