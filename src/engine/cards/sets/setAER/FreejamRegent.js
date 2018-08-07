"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FreejamRegent extends UnimplementedCard {
  constructor (game) {
    super(game, "Freejam Regent", "Aether Revolt", "AER");
  }
}

module.exports = FreejamRegent;
