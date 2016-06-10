"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhantasmalFiend extends UnimplementedCard {
  constructor (game) {
    super(game, "Phantasmal Fiend", "Alliances", "ALL");
  }
}

module.exports = PhantasmalFiend;
