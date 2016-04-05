"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MinotaurExplorer extends UnimplementedCard {
  constructor(game) {
    super(game, "Minotaur Explorer", "Odyssey", "ODY");
  }
}

module.exports = MinotaurExplorer;
