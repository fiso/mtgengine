"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TowerGargoyle extends UnimplementedCard {
  constructor (game) {
    super(game, "Tower Gargoyle", "Modern Masters 2017", "MM3");
  }
}

module.exports = TowerGargoyle;
