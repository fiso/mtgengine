"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mindcrank extends UnimplementedCard {
  constructor(game) {
    super(game, "Mindcrank", "New Phyrexia", "NPH");
  }
}

module.exports = Mindcrank;
