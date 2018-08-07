"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindbreakTrap extends UnimplementedCard {
  constructor (game) {
    super(game, "Mindbreak Trap", "Zendikar", "ZEN");
  }
}

module.exports = MindbreakTrap;
