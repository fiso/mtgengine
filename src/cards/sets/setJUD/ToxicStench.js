"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ToxicStench extends UnimplementedCard {
  constructor (game) {
    super(game, "Toxic Stench", "Judgment", "JUD");
  }
}

module.exports = ToxicStench;
