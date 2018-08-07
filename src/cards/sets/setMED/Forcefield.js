"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Forcefield extends UnimplementedCard {
  constructor (game) {
    super(game, "Forcefield", "Masters Edition", "MED");
  }
}

module.exports = Forcefield;
