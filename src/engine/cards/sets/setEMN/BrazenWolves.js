"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrazenWolves extends UnimplementedCard {
  constructor (game) {
    super(game, "Brazen Wolves", "Eldritch Moon", "EMN");
  }
}

module.exports = BrazenWolves;
