"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ornitharch extends UnimplementedCard {
  constructor(game) {
    super(game, "Ornitharch", "Born of the Gods", "BNG");
  }
}

module.exports = Ornitharch;
