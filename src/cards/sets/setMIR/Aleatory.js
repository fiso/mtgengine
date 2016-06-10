"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Aleatory extends UnimplementedCard {
  constructor (game) {
    super(game, "Aleatory", "Mirage", "MIR");
  }
}

module.exports = Aleatory;
