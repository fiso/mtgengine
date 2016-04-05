"use strict";
const Constants = require ("../../../Constants");
const SoldeviDiggerBase = require("../setALL/SoldeviDigger");

class SoldeviDigger extends SoldeviDiggerBase {
  constructor(game) {
    super(game, "Soldevi Digger", "Masters Edition II", "ME2");
  }
}

module.exports = SoldeviDigger;
