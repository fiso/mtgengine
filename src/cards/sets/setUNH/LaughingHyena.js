"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LaughingHyena extends UnimplementedCard {
  constructor (game) {
    super(game, "Laughing Hyena", "Unhinged", "UNH");
  }
}

module.exports = LaughingHyena;
