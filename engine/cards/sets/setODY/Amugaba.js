"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Amugaba extends UnimplementedCard {
  constructor(game) {
    super(game, "Amugaba", "Odyssey", "ODY");
  }
}

module.exports = Amugaba;
