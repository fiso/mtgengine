"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DefiantVanguard extends UnimplementedCard {
  constructor(game) {
    super(game, "Defiant Vanguard", "Nemesis", "NMS");
  }
}

module.exports = DefiantVanguard;
