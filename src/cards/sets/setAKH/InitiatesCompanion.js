"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InitiatesCompanion extends UnimplementedCard {
  constructor (game) {
    super(game, "Initiate's Companion", "Amonkhet", "AKH");
  }
}

module.exports = InitiatesCompanion;
