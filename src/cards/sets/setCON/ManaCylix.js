"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaCylix extends UnimplementedCard {
  constructor (game) {
    super(game, "Mana Cylix", "Conflux", "CON");
  }
}

module.exports = ManaCylix;
