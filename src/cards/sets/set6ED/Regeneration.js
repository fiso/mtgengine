"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Regeneration extends UnimplementedCard {
  constructor (game) {
    super(game, "Regeneration", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Regeneration;
