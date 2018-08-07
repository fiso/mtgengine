"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwordoftheParuns extends UnimplementedCard {
  constructor (game) {
    super(game, "Sword of the Paruns", "Commander Anthology", "CMA");
  }
}

module.exports = SwordoftheParuns;
