"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fire extends UnimplementedCard {
  constructor(game) {
    super(game, "Fire", "Apocalypse", "APC");
  }
}

module.exports = Fire;
