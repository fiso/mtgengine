"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Pendelhaven extends UnimplementedCard {
  constructor (game) {
    super(game, "Pendelhaven", "Masters 25", "A25");
  }
}

module.exports = Pendelhaven;
