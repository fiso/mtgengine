"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Crovax extends UnimplementedCard {
  constructor(game) {
    super(game, "Crovax", "Vanguard", "VAN");
  }
}

module.exports = Crovax;
