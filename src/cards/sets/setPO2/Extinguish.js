"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Extinguish extends UnimplementedCard {
  constructor(game) {
    super(game, "Extinguish", "Portal Second Age", "PO2");
  }
}

module.exports = Extinguish;
