"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MalakirFamiliar extends UnimplementedCard {
  constructor (game) {
    super(game, "Malakir Familiar", "Battle for Zendikar", "BFZ");
  }
}

module.exports = MalakirFamiliar;
