"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Misfortune extends UnimplementedCard {
  constructor(game) {
    super(game, "Misfortune", "Alliances", "ALL");
  }
}

module.exports = Misfortune;
