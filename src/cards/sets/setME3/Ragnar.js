"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ragnar extends UnimplementedCard {
  constructor (game) {
    super(game, "Ragnar", "Masters Edition III", "ME3");
  }
}

module.exports = Ragnar;
