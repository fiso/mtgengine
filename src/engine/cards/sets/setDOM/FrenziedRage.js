"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrenziedRage extends UnimplementedCard {
  constructor (game) {
    super(game, "Frenzied Rage", "Dominaria", "DOM");
  }
}

module.exports = FrenziedRage;
