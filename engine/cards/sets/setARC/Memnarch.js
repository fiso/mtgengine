"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Memnarch extends UnimplementedCard {
  constructor(game) {
    super(game, "Memnarch", "Archenemy", "ARC");
  }
}

module.exports = Memnarch;
