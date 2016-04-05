"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HedronCrab extends UnimplementedCard {
  constructor(game) {
    super(game, "Hedron Crab", "Zendikar", "ZEN");
  }
}

module.exports = HedronCrab;
