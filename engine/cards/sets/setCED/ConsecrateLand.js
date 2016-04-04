"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConsecrateLand extends UnimplementedCard {
  constructor(game) {
    super(game, "Consecrate Land", "Collector's Edition", "CED");
  }
}

module.exports = ConsecrateLand;
