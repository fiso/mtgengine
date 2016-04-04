"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarbarianLunatic extends UnimplementedCard {
  constructor(game) {
    super(game, "Barbarian Lunatic", "Odyssey", "ODY");
  }
}

module.exports = BarbarianLunatic;
