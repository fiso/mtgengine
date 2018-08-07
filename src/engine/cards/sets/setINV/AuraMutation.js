"use strict";
const Constants = require ("../../../Constants");
const AuraMutationBase = require("../setC16/AuraMutation");

class AuraMutation extends AuraMutationBase {
  constructor (game) {
    super(game, "Aura Mutation", "Invasion", "INV");
  }
}

module.exports = AuraMutation;
