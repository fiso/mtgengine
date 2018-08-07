"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Regeneration extends UnimplementedCard {
  constructor (game) {
    super(game, "Regeneration", "Tenth Edition", "10E");
  }
}

module.exports = Regeneration;
