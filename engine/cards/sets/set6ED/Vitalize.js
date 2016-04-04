"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Vitalize extends UnimplementedCard {
  constructor(game) {
    super(game, "Vitalize", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Vitalize;
