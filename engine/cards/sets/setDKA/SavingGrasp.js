"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SavingGrasp extends UnimplementedCard {
  constructor(game) {
    super(game, "Saving Grasp", "Dark Ascension", "DKA");
  }
}

module.exports = SavingGrasp;
