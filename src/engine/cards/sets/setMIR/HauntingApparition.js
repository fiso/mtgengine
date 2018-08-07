"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HauntingApparition extends UnimplementedCard {
  constructor (game) {
    super(game, "Haunting Apparition", "Mirage", "MIR");
  }
}

module.exports = HauntingApparition;
