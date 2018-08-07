"use strict";
const Constants = require ("../../../Constants");
const SoldeviSageBase = require("../set6ED/SoldeviSage");

class SoldeviSage extends SoldeviSageBase {
  constructor (game) {
    super(game, "Soldevi Sage", "Alliances", "ALL");
  }
}

module.exports = SoldeviSage;
