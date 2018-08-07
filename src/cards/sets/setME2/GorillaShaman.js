"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GorillaShaman extends UnimplementedCard {
  constructor (game) {
    super(game, "Gorilla Shaman", "Masters Edition II", "ME2");
  }
}

module.exports = GorillaShaman;
