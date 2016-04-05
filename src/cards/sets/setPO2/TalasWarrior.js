"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TalasWarrior extends UnimplementedCard {
  constructor(game) {
    super(game, "Talas Warrior", "Portal Second Age", "PO2");
  }
}

module.exports = TalasWarrior;
