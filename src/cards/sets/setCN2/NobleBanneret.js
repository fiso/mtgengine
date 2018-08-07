"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NobleBanneret extends UnimplementedCard {
  constructor (game) {
    super(game, "Noble Banneret", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = NobleBanneret;
