"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hallow extends UnimplementedCard {
  constructor (game) {
    super(game, "Hallow", "Darksteel", "DST");
  }
}

module.exports = Hallow;
