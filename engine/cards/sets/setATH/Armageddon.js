"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Armageddon extends UnimplementedCard {
  constructor(game) {
    super(game, "Armageddon", "Anthologies", "ATH");
  }
}

module.exports = Armageddon;
