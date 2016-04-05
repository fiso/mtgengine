"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PitfallTrap extends UnimplementedCard {
  constructor(game) {
    super(game, "Pitfall Trap", "Zendikar", "ZEN");
  }
}

module.exports = PitfallTrap;
