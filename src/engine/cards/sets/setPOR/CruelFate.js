"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CruelFate extends UnimplementedCard {
  constructor (game) {
    super(game, "Cruel Fate", "Portal", "POR");
  }
}

module.exports = CruelFate;
