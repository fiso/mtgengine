"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DakmorScorpion extends UnimplementedCard {
  constructor(game) {
    super(game, "Dakmor Scorpion", "Portal Second Age", "PO2");
  }
}

module.exports = DakmorScorpion;
