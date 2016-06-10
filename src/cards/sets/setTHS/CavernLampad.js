"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CavernLampad extends UnimplementedCard {
  constructor (game) {
    super(game, "Cavern Lampad", "Theros", "THS");
  }
}

module.exports = CavernLampad;
