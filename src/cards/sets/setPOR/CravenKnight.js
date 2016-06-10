"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CravenKnight extends UnimplementedCard {
  constructor (game) {
    super(game, "Craven Knight", "Portal", "POR");
  }
}

module.exports = CravenKnight;
