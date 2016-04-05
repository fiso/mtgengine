"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LethargyTrap extends UnimplementedCard {
  constructor(game) {
    super(game, "Lethargy Trap", "Zendikar", "ZEN");
  }
}

module.exports = LethargyTrap;
