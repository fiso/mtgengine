"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DivineRetribution extends UnimplementedCard {
  constructor(game) {
    super(game, "Divine Retribution", "Mirage", "MIR");
  }
}

module.exports = DivineRetribution;
