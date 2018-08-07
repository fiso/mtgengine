"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AcidicSlime extends UnimplementedCard {
  constructor (game) {
    super(game, "Acidic Slime", "Commander 2018", "C18");
  }
}

module.exports = AcidicSlime;
