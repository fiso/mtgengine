"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Maraxus extends UnimplementedCard {
  constructor (game) {
    super(game, "Maraxus", "Vanguard Series", "PVAN");
  }
}

module.exports = Maraxus;
