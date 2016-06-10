"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NorwoodPriestess extends UnimplementedCard {
  constructor (game) {
    super(game, "Norwood Priestess", "Portal Second Age", "PO2");
  }
}

module.exports = NorwoodPriestess;
