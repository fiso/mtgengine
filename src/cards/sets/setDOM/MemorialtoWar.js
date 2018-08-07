"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MemorialtoWar extends UnimplementedCard {
  constructor (game) {
    super(game, "Memorial to War", "Dominaria", "DOM");
  }
}

module.exports = MemorialtoWar;
