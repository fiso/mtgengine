"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReveilleSquad extends UnimplementedCard {
  constructor(game) {
    super(game, "Reveille Squad", "Prophecy", "PCY");
  }
}

module.exports = ReveilleSquad;
