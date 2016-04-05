"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkirkCommando extends UnimplementedCard {
  constructor(game) {
    super(game, "Skirk Commando", "Archenemy", "ARC");
  }
}

module.exports = SkirkCommando;
