"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GuerrillaTactics extends UnimplementedCard {
  constructor(game) {
    super(game, "Guerrilla Tactics", "Alliances", "ALL");
  }
}

module.exports = GuerrillaTactics;
