"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Pentavus extends UnimplementedCard {
  constructor (game) {
    super(game, "Pentavus", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = Pentavus;
