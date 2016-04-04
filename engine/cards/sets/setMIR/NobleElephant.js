"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NobleElephant extends UnimplementedCard {
  constructor(game) {
    super(game, "Noble Elephant", "Mirage", "MIR");
  }
}

module.exports = NobleElephant;
