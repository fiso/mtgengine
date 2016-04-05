"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Disentomb extends UnimplementedCard {
  constructor(game) {
    super(game, "Disentomb", "Magic 2010", "M10");
  }
}

module.exports = Disentomb;
