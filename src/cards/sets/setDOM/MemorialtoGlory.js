"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MemorialtoGlory extends UnimplementedCard {
  constructor (game) {
    super(game, "Memorial to Glory", "Dominaria", "DOM");
  }
}

module.exports = MemorialtoGlory;
