"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Conquer extends UnimplementedCard {
  constructor(game) {
    super(game, "Conquer", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Conquer;
