"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AncestorsChosen extends UnimplementedCard {
  constructor (game) {
    super(game, "Ancestor's Chosen", "Tenth Edition", "10E");
  }
}

module.exports = AncestorsChosen;
