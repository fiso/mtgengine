"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OrcishCaptainBase = require("../setFEM/OrcishCaptain.js");

class OrcishCaptain extends OrcishCaptainBase {
  constructor(game) {
    super(game, "Orcish Captain", "Fifth Edition", "5ED");
  }
}

module.exports = OrcishCaptain;
