"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrumblingSanctuary extends UnimplementedCard {
  constructor(game) {
    super(game, "Crumbling Sanctuary", "Mercadian Masques", "MMQ");
  }
}

module.exports = CrumblingSanctuary;
