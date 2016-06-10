"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SubterraneanSpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Subterranean Spirit", "Mirage", "MIR");
  }
}

module.exports = SubterraneanSpirit;
