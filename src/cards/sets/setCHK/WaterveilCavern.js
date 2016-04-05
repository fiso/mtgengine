"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WaterveilCavern extends UnimplementedCard {
  constructor(game) {
    super(game, "Waterveil Cavern", "Champions of Kamigawa", "CHK");
  }
}

module.exports = WaterveilCavern;
