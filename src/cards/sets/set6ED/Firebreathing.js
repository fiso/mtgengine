"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Firebreathing extends UnimplementedCard {
  constructor (game) {
    super(game, "Firebreathing", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Firebreathing;
