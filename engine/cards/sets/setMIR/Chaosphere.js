"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Chaosphere extends UnimplementedCard {
  constructor(game) {
    super(game, "Chaosphere", "Mirage", "MIR");
  }
}

module.exports = Chaosphere;
