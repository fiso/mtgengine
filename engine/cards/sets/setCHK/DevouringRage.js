"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DevouringRage extends UnimplementedCard {
  constructor(game) {
    super(game, "Devouring Rage", "Champions of Kamigawa", "CHK");
  }
}

module.exports = DevouringRage;
