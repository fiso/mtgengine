"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fugue extends UnimplementedCard {
  constructor(game) {
    super(game, "Fugue", "Exodus", "EXO");
  }
}

module.exports = Fugue;
