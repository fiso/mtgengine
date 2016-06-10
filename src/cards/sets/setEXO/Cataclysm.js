"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cataclysm extends UnimplementedCard {
  constructor (game) {
    super(game, "Cataclysm", "Exodus", "EXO");
  }
}

module.exports = Cataclysm;
