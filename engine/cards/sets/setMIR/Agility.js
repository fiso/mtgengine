"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Agility extends UnimplementedCard {
  constructor(game) {
    super(game, "Agility", "Mirage", "MIR");
  }
}

module.exports = Agility;
