"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rowen extends UnimplementedCard {
  constructor(game) {
    super(game, "Rowen", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Rowen;
