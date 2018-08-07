"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Armageddon extends UnimplementedCard {
  constructor (game) {
    super(game, "Armageddon", "Masters 25", "A25");
  }
}

module.exports = Armageddon;
