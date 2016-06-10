"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AuraFinesse extends UnimplementedCard {
  constructor (game) {
    super(game, "Aura Finesse", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = AuraFinesse;
