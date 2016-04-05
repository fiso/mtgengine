"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Flashfires extends UnimplementedCard {
  constructor(game) {
    super(game, "Flashfires", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Flashfires;
