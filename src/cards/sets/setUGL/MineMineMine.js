"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MineMineMine extends UnimplementedCard {
  constructor(game) {
    super(game, "Mine, Mine, Mine!", "Unglued", "UGL");
  }
}

module.exports = MineMineMine;
