"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DreadSpecter extends UnimplementedCard {
  constructor(game) {
    super(game, "Dread Specter", "Mirage", "MIR");
  }
}

module.exports = DreadSpecter;
