"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MischiefandMayhem extends UnimplementedCard {
  constructor(game) {
    super(game, "Mischief and Mayhem", "Born of the Gods", "BNG");
  }
}

module.exports = MischiefandMayhem;
