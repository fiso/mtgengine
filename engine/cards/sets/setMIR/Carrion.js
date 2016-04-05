"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Carrion extends UnimplementedCard {
  constructor(game) {
    super(game, "Carrion", "Mirage", "MIR");
  }
}

module.exports = Carrion;
