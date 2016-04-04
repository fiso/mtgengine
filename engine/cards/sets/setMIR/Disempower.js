"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Disempower extends UnimplementedCard {
  constructor(game) {
    super(game, "Disempower", "Mirage", "MIR");
  }
}

module.exports = Disempower;
