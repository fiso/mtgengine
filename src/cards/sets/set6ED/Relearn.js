"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Relearn extends UnimplementedCard {
  constructor (game) {
    super(game, "Relearn", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Relearn;
