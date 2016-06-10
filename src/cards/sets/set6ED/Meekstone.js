"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Meekstone extends UnimplementedCard {
  constructor (game) {
    super(game, "Meekstone", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Meekstone;
