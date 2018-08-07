"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcaneFlight extends UnimplementedCard {
  constructor (game) {
    super(game, "Arcane Flight", "Dominaria", "DOM");
  }
}

module.exports = ArcaneFlight;
