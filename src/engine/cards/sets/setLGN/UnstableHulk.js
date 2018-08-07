"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnstableHulk extends UnimplementedCard {
  constructor (game) {
    super(game, "Unstable Hulk", "Legions", "LGN");
  }
}

module.exports = UnstableHulk;
