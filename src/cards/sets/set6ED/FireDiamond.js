"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FireDiamond extends UnimplementedCard {
  constructor(game) {
    super(game, "Fire Diamond", "Classic Sixth Edition", "6ED");
  }
}

module.exports = FireDiamond;
