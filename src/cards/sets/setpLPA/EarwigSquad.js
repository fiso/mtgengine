"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EarwigSquad extends UnimplementedCard {
  constructor(game) {
    super(game, "Earwig Squad", "Launch Parties", "pLPA");
  }
}

module.exports = EarwigSquad;
