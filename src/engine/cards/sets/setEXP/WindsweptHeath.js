"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WindsweptHeath extends UnimplementedCard {
  constructor (game) {
    super(game, "Windswept Heath", "Zendikar Expeditions", "EXP");
  }
}

module.exports = WindsweptHeath;
