"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RelentlessAssault extends UnimplementedCard {
  constructor (game) {
    super(game, "Relentless Assault", "Classic Sixth Edition", "6ED");
  }
}

module.exports = RelentlessAssault;
