"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Valor extends UnimplementedCard {
  constructor (game) {
    super(game, "Valor", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = Valor;
