"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Perish extends UnimplementedCard {
  constructor(game) {
    super(game, "Perish", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Perish;
