"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShallowGrave extends UnimplementedCard {
  constructor(game) {
    super(game, "Shallow Grave", "Mirage", "MIR");
  }
}

module.exports = ShallowGrave;
