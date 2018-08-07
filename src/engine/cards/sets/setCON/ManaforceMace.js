"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaforceMace extends UnimplementedCard {
  constructor (game) {
    super(game, "Manaforce Mace", "Conflux", "CON");
  }
}

module.exports = ManaforceMace;
