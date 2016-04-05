"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sanguimancy extends UnimplementedCard {
  constructor(game) {
    super(game, "Sanguimancy", "Born of the Gods", "BNG");
  }
}

module.exports = Sanguimancy;
