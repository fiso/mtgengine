"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sauté extends UnimplementedCard {
  constructor(game) {
    super(game, "Sauté", "Unhinged", "UNH");
  }
}

module.exports = Sauté;
