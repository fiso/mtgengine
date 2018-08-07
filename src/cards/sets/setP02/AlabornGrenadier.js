"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlabornGrenadier extends UnimplementedCard {
  constructor (game) {
    super(game, "Alaborn Grenadier", "Portal Second Age", "P02");
  }
}

module.exports = AlabornGrenadier;
