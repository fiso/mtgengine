"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MinisterofImpediments extends UnimplementedCard {
  constructor(game) {
    super(game, "Minister of Impediments", "Dissension", "DIS");
  }
}

module.exports = MinisterofImpediments;
