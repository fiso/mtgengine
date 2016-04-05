"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElgaudInquisitor extends UnimplementedCard {
  constructor(game) {
    super(game, "Elgaud Inquisitor", "Dark Ascension", "DKA");
  }
}

module.exports = ElgaudInquisitor;
