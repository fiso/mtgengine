"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeedbornMuse extends UnimplementedCard {
  constructor(game) {
    super(game, "Seedborn Muse", "Legions", "LGN");
  }
}

module.exports = SeedbornMuse;
