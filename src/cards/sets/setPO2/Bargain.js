"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Bargain extends UnimplementedCard {
  constructor (game) {
    super(game, "Bargain", "Portal Second Age", "PO2");
  }
}

module.exports = Bargain;
