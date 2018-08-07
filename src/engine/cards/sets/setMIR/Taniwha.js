"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Taniwha extends UnimplementedCard {
  constructor (game) {
    super(game, "Taniwha", "Mirage", "MIR");
  }
}

module.exports = Taniwha;
