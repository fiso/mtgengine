"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DecimatorWeb extends UnimplementedCard {
  constructor (game) {
    super(game, "Decimator Web", "Mirrodin Besieged", "MBS");
  }
}

module.exports = DecimatorWeb;
