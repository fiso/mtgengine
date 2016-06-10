"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HauntingEchoes extends UnimplementedCard {
  constructor (game) {
    super(game, "Haunting Echoes", "Magic 2010", "M10");
  }
}

module.exports = HauntingEchoes;
