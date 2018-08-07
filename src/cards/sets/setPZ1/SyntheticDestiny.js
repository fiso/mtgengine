"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SyntheticDestiny extends UnimplementedCard {
  constructor (game) {
    super(game, "Synthetic Destiny", "Legendary Cube", "PZ1");
  }
}

module.exports = SyntheticDestiny;
