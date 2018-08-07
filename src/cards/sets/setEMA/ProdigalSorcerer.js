"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ProdigalSorcerer extends UnimplementedCard {
  constructor (game) {
    super(game, "Prodigal Sorcerer", "Eternal Masters", "EMA");
  }
}

module.exports = ProdigalSorcerer;
