"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildLeotau extends UnimplementedCard {
  constructor (game) {
    super(game, "Wild Leotau", "Conflux", "CON");
  }
}

module.exports = WildLeotau;
