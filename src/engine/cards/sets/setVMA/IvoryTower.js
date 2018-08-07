"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IvoryTower extends UnimplementedCard {
  constructor (game) {
    super(game, "Ivory Tower", "Vintage Masters", "VMA");
  }
}

module.exports = IvoryTower;
