"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gigantoplasm extends UnimplementedCard {
  constructor (game) {
    super(game, "Gigantoplasm", "Legendary Cube", "PZ1");
  }
}

module.exports = Gigantoplasm;
