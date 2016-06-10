"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fervor extends UnimplementedCard {
  constructor (game) {
    super(game, "Fervor", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Fervor;
