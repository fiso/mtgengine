"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AridMesa extends UnimplementedCard {
  constructor (game) {
    super(game, "Arid Mesa", "Zendikar", "ZEN");
  }
}

module.exports = AridMesa;
