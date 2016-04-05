"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HarshDeceiver extends UnimplementedCard {
  constructor(game) {
    super(game, "Harsh Deceiver", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HarshDeceiver;
