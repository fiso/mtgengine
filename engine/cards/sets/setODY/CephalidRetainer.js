"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CephalidRetainer extends UnimplementedCard {
  constructor(game) {
    super(game, "Cephalid Retainer", "Odyssey", "ODY");
  }
}

module.exports = CephalidRetainer;
