"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EbonPraetor extends UnimplementedCard {
  constructor(game) {
    super(game, "Ebon Praetor", "Fallen Empires", "FEM");
  }
}

module.exports = EbonPraetor;
