"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Bant extends UnimplementedCard {
  constructor(game) {
    super(game, "Bant", "Planechase", "HOP");
  }
}

module.exports = Bant;
