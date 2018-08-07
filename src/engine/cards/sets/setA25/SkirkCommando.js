"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkirkCommando extends UnimplementedCard {
  constructor (game) {
    super(game, "Skirk Commando", "Masters 25", "A25");
  }
}

module.exports = SkirkCommando;
