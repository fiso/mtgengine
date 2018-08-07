"use strict";
const Constants = require ("../../../Constants");
const SoldeviDiggerBase = require("../setME2/SoldeviDigger");

class SoldeviDigger extends SoldeviDiggerBase {
  constructor (game) {
    super(game, "Soldevi Digger", "Alliances", "ALL");
  }
}

module.exports = SoldeviDigger;
