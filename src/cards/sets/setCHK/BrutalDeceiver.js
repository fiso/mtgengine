"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrutalDeceiver extends UnimplementedCard {
  constructor(game) {
    super(game, "Brutal Deceiver", "Champions of Kamigawa", "CHK");
  }
}

module.exports = BrutalDeceiver;
