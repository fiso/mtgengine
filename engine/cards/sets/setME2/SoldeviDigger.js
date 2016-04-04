"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SoldeviDiggerBase = require("../setALL/SoldeviDigger.js");

class SoldeviDigger extends SoldeviDiggerBase {
  constructor(game) {
    super(game, "Soldevi Digger", "Masters Edition II", "ME2");
  }
}

module.exports = SoldeviDigger;
