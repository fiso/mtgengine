"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Leveler extends UnimplementedCard {
  constructor (game) {
    super(game, "Leveler", "Mirrodin", "MRD");
  }
}

module.exports = Leveler;
