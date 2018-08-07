"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhantasmalFiend extends UnimplementedCard {
  constructor (game) {
    super(game, "Phantasmal Fiend", "Masters Edition II", "ME2");
  }
}

module.exports = PhantasmalFiend;
