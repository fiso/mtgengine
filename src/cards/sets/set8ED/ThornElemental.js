"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThornElemental extends UnimplementedCard {
  constructor(game) {
    super(game, "Thorn Elemental", "Eighth Edition", "8ED");
  }
}

module.exports = ThornElemental;
