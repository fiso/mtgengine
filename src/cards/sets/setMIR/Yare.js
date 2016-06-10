"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Yare extends UnimplementedCard {
  constructor (game) {
    super(game, "Yare", "Mirage", "MIR");
  }
}

module.exports = Yare;
