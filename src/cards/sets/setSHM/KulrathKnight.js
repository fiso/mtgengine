"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KulrathKnight extends UnimplementedCard {
  constructor (game) {
    super(game, "Kulrath Knight", "Shadowmoor", "SHM");
  }
}

module.exports = KulrathKnight;
