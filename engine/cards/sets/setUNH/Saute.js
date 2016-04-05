"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Saute extends UnimplementedCard {
  constructor(game) {
    super(game, "Sauté", "Unhinged", "UNH");
  }
}

module.exports = Saute;
