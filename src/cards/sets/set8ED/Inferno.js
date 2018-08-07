"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Inferno extends UnimplementedCard {
  constructor (game) {
    super(game, "Inferno", "Eighth Edition", "8ED");
  }
}

module.exports = Inferno;
