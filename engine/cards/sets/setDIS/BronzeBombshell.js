"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BronzeBombshell extends UnimplementedCard {
  constructor(game) {
    super(game, "Bronze Bombshell", "Dissension", "DIS");
  }
}

module.exports = BronzeBombshell;
