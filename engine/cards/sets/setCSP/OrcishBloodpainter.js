"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrcishBloodpainter extends Card {
  constructor(game) {
    super(game, "Orcish Bloodpainter", "Coldsnap", "CSP");
  }
}

module.exports = OrcishBloodpainter;
