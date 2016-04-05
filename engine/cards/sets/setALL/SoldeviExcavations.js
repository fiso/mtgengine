"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoldeviExcavations extends UnimplementedCard {
  constructor(game) {
    super(game, "Soldevi Excavations", "Alliances", "ALL");
  }
}

module.exports = SoldeviExcavations;
