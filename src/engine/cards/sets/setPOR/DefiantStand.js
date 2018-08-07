"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DefiantStand extends UnimplementedCard {
  constructor (game) {
    super(game, "Defiant Stand", "Portal", "POR");
  }
}

module.exports = DefiantStand;
