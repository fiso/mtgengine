"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Woeleecher extends UnimplementedCard {
  constructor (game) {
    super(game, "Woeleecher", "Shadowmoor", "SHM");
  }
}

module.exports = Woeleecher;
