"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ragnar extends UnimplementedCard {
  constructor(game) {
    super(game, "Ragnar", "Legends", "LEG");
  }
}

module.exports = Ragnar;
