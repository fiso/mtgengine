"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InfernalContract extends UnimplementedCard {
  constructor(game) {
    super(game, "Infernal Contract", "Classic Sixth Edition", "6ED");
  }
}

module.exports = InfernalContract;
