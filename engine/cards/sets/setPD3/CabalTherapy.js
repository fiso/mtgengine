"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CabalTherapyBase = require("../setpFNM/CabalTherapy.js");

class CabalTherapy extends CabalTherapyBase {
  constructor(game) {
    super(game, "Cabal Therapy", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = CabalTherapy;
