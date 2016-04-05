"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeaofSand extends UnimplementedCard {
  constructor(game) {
    super(game, "Sea of Sand", "Planechase", "HOP");
  }
}

module.exports = SeaofSand;
