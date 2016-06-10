"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TriumphoftheHordes extends UnimplementedCard {
  constructor (game) {
    super(game, "Triumph of the Hordes", "New Phyrexia", "NPH");
  }
}

module.exports = TriumphoftheHordes;
