"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TeferisIsle extends UnimplementedCard {
  constructor (game) {
    super(game, "Teferi's Isle", "Mirage", "MIR");
  }
}

module.exports = TeferisIsle;
