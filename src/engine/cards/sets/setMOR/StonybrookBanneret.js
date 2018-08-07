"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StonybrookBanneret extends UnimplementedCard {
  constructor (game) {
    super(game, "Stonybrook Banneret", "Morningtide", "MOR");
  }
}

module.exports = StonybrookBanneret;
