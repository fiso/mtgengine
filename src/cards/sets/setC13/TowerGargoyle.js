"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TowerGargoyle extends UnimplementedCard {
  constructor (game) {
    super(game, "Tower Gargoyle", "Commander 2013 Edition", "C13");
  }
}

module.exports = TowerGargoyle;
