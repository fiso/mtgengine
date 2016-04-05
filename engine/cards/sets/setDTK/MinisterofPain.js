"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MinisterofPain extends UnimplementedCard {
  constructor(game) {
    super(game, "Minister of Pain", "Dragons of Tarkir", "DTK");
  }
}

module.exports = MinisterofPain;
