"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThreeWishes extends UnimplementedCard {
  constructor(game) {
    super(game, "Three Wishes", "Visions", "VIS");
  }
}

module.exports = ThreeWishes;
