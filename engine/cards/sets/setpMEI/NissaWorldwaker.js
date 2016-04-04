"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NissaWorldwakerBase = require("../setM15/NissaWorldwaker.js");

class NissaWorldwaker extends NissaWorldwakerBase {
  constructor(game) {
    super(game, "Nissa, Worldwaker", "Media Inserts", "pMEI");
  }
}

module.exports = NissaWorldwaker;
