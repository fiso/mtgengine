"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Disentomb extends UnimplementedCard {
  constructor (game) {
    super(game, "Disentomb", "Magic 2013", "M13");
  }
}

module.exports = Disentomb;
