"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GorillaShaman extends UnimplementedCard {
  constructor (game) {
    super(game, "Gorilla Shaman", "Alliances", "ALL");
  }
}

module.exports = GorillaShaman;
