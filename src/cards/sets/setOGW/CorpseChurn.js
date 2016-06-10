"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CorpseChurn extends UnimplementedCard {
  constructor (game) {
    super(game, "Corpse Churn", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = CorpseChurn;
