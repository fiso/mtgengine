"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cryptoplasm extends UnimplementedCard {
  constructor (game) {
    super(game, "Cryptoplasm", "Mirrodin Besieged", "MBS");
  }
}

module.exports = Cryptoplasm;
