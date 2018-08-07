"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StormSculptor extends UnimplementedCard {
  constructor (game) {
    super(game, "Storm Sculptor", "Ixalan", "XLN");
  }
}

module.exports = StormSculptor;
