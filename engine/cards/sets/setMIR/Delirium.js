"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Delirium extends UnimplementedCard {
  constructor(game) {
    super(game, "Delirium", "Mirage", "MIR");
  }
}

module.exports = Delirium;
