"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mirozel extends UnimplementedCard {
  constructor(game) {
    super(game, "Mirozel", "Exodus", "EXO");
  }
}

module.exports = Mirozel;
