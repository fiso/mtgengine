"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ertai extends UnimplementedCard {
  constructor (game) {
    super(game, "Ertai", "Vanguard Series", "PVAN");
  }
}

module.exports = Ertai;
