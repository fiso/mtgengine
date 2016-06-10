"use strict";
const Constants = require ("../../../Constants");
const SoldeviSageBase = require("../setALL/SoldeviSage");

class SoldeviSage extends SoldeviSageBase {
  constructor (game) {
    super(game, "Soldevi Sage", "Classic Sixth Edition", "6ED");
  }
}

module.exports = SoldeviSage;
