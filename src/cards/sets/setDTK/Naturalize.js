"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Naturalize extends UnimplementedCard {
  constructor(game) {
    super(game, "Naturalize", "Dragons of Tarkir", "DTK");
  }
}

module.exports = Naturalize;
