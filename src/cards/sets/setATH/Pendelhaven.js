"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Pendelhaven extends UnimplementedCard {
  constructor (game) {
    super(game, "Pendelhaven", "Anthologies", "ATH");
  }
}

module.exports = Pendelhaven;
