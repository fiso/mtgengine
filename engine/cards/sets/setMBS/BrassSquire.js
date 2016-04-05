"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrassSquire extends UnimplementedCard {
  constructor(game) {
    super(game, "Brass Squire", "Mirrodin Besieged", "MBS");
  }
}

module.exports = BrassSquire;
