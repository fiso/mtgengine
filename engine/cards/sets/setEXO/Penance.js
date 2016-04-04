"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Penance extends UnimplementedCard {
  constructor(game) {
    super(game, "Penance", "Exodus", "EXO");
  }
}

module.exports = Penance;
