"use strict";
const Constants = require ("../../../Constants");
const InfernalContractBase = require("../setPHUK/InfernalContract");

class InfernalContract extends InfernalContractBase {
  constructor (game) {
    super(game, "Infernal Contract", "Classic Sixth Edition", "6ED");
  }
}

module.exports = InfernalContract;
