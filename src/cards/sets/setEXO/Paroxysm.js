"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Paroxysm extends UnimplementedCard {
  constructor(game) {
    super(game, "Paroxysm", "Exodus", "EXO");
  }
}

module.exports = Paroxysm;
