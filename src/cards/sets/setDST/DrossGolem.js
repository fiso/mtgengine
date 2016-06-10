"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrossGolem extends UnimplementedCard {
  constructor (game) {
    super(game, "Dross Golem", "Darksteel", "DST");
  }
}

module.exports = DrossGolem;
