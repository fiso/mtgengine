"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CursedMonstrosity extends UnimplementedCard {
  constructor(game) {
    super(game, "Cursed Monstrosity", "Odyssey", "ODY");
  }
}

module.exports = CursedMonstrosity;
