"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PriestofUrabrask extends UnimplementedCard {
  constructor(game) {
    super(game, "Priest of Urabrask", "Magic Game Day", "pMGD");
  }
}

module.exports = PriestofUrabrask;
