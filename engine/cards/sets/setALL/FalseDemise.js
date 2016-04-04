"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FalseDemise extends UnimplementedCard {
  constructor(game) {
    super(game, "False Demise", "Alliances", "ALL");
  }
}

module.exports = FalseDemise;
