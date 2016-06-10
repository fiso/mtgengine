"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Convalescence extends UnimplementedCard {
  constructor (game) {
    super(game, "Convalescence", "Exodus", "EXO");
  }
}

module.exports = Convalescence;
