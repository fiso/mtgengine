"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeaScryer extends UnimplementedCard {
  constructor(game) {
    super(game, "Sea Scryer", "Mirage", "MIR");
  }
}

module.exports = SeaScryer;
