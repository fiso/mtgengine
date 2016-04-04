"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CabalCoffersBase = require("../setpFNM/CabalCoffers.js");

class CabalCoffers extends CabalCoffersBase {
  constructor(game) {
    super(game, "Cabal Coffers", "Torment", "TOR");
  }
}

module.exports = CabalCoffers;
