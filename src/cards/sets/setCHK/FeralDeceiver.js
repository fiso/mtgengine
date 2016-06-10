"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FeralDeceiver extends UnimplementedCard {
  constructor (game) {
    super(game, "Feral Deceiver", "Champions of Kamigawa", "CHK");
  }
}

module.exports = FeralDeceiver;
