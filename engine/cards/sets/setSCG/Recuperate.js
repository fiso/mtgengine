"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Recuperate extends UnimplementedCard {
  constructor(game) {
    super(game, "Recuperate", "Scourge", "SCG");
  }
}

module.exports = Recuperate;
