"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Inferno extends UnimplementedCard {
  constructor (game) {
    super(game, "Inferno", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Inferno;
