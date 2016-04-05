"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Glint extends UnimplementedCard {
  constructor(game) {
    super(game, "Glint", "Dragons of Tarkir", "DTK");
  }
}

module.exports = Glint;
