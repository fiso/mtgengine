"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HandofCruelty extends UnimplementedCard {
  constructor(game) {
    super(game, "Hand of Cruelty", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = HandofCruelty;
