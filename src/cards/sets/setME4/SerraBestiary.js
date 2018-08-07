"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SerraBestiary extends UnimplementedCard {
  constructor (game) {
    super(game, "Serra Bestiary", "Masters Edition IV", "ME4");
  }
}

module.exports = SerraBestiary;
